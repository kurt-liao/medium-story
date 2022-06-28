const getPost = require("../src/posts-request");
import card from "../src/card";
require("dotenv").config();

module.exports = async (req, res) => {
  const { user_id, index, is_link, hide = "" } = req.query;

  try {
    const { title, pubDate, guid, thumbnail, description, categories } =
      await getPost(user_id, index);

    const _hide = hide.replace(/\s/g, "");
    const hideArr = _hide.split(",");

    if (!is_link) {
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
          categories,
          hide: hideArr,
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
