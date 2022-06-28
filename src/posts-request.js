const axios = require("axios");
const moment = require("moment");

const fetchPosts = (username) => {
  return axios({
    url: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${username}`,
    method: "get",
  });
};

const getPost = async (username, index) => {
  if (!username) {
    throw new Error("Missing param username.");
  }

  try {
    const postsRes = await fetchPosts(username);
    const { items } = postsRes?.data;

    const _index = index || 0;
    if (!items || !items[_index]) {
      throw new Error("No post matched");
    }

    const thumbnail = items[_index]?.thumbnail;
    if (thumbnail && thumbnail.indexOf("cdn") !== -1) {
      const { data: thumbnailRaw } = await axios.get(thumbnail, {
        responseType: "arraybuffer",
      });

      const base64 = Buffer.from(thumbnailRaw).toString("base64");
      const imgTypeArr = thumbnail.split(".");
      const imgType = imgTypeArr[imgTypeArr.length - 1];
      const base64Img = `data:image/${imgType};base64,${base64}`;
      items[_index].thumbnail = base64Img;
    }

    items[_index].pubDate = moment(items[_index].pubDate).format("YYYY-MM-DD");

    return items[_index];
  } catch (err) {
    const message = err?.response?.data?.message;

    if (message) {
      throw new Error(message);
    }

    throw new Error(
      `Fetch to post error from username: ${username}, index: ${index}`,
    );
  }
};

module.exports = getPost;
