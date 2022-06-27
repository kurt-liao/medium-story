const getPost = require("../src/posts-request");
import card from "../src/card";
require("dotenv").config();

module.exports = async (req, res) => {
  const { user_id, index, is_url } = req.query;

  try {
    const { title, pubDate, guid, thumbnail, description } = await getPost(
      user_id,
      index,
    );

    if (!is_url) {
      res.setHeader("Cache-Control", "public max-age=3600");
      res.setHeader("Content-Type", "image/svg+xml");

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
    }

    res.writeHead(301, { Location: guid });
    res.end();
  } catch (err) {
    res.setHeader("Content-Type", "text/plain");
    return res.send(err.message);
  }
};
