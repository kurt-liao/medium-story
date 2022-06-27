const getPost = require("../src/posts-request");
import card from "../src/card";
require("dotenv").config();

module.exports = async (req, res) => {
  const { user_id, index } = req.query;
  console.log(user_id, index);
  res.setHeader("Cache-Control", "public max-age=3600");
  res.setHeader("Content-Type", "image/svg+xml");

  try {
    const { title, pubDate, guid, thumbnail, description } = await getPost(
      user_id,
      index,
    );
    console.log(description);
    return res.send(
      card({
        title,
        thumbnail,
        url: guid,
        date: pubDate,
        description: description
          .replace(/<\/?[^>]+(>|$)/g, "")
          .substring(0, 200),
      }),
    );
  } catch (err) {
    res.setHeader("Content-Type", "text/plain");
    return res.send(err.message);
  }
};
