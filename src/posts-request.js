const axios = require("axios");
const moment = require("moment");

const fetchPosts = (userId) => {
  return axios({
    url: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${userId}`,
    method: "get",
  });
};

const getPost = async (userId, index) => {
  if (!userId) {
    throw new Error("Missing param userId.");
  }

  try {
    const postsRes = await fetchPosts(userId);
    const { items } = postsRes?.data;

    const _index = index || 0;
    if (!items || !items[_index]) {
      throw new Error("No post matched");
    }

    const thumbnail = items[_index]?.thumbnail;
    if (thumbnail) {
      const { data: thumbnailRaw } = await axios.get(thumbnail, {
        responseType: "arraybuffer",
      });

      const base64Img = Buffer.from(thumbnailRaw).toString("base64");
      const imgTypeArr = thumbnail.split(".");
      const imgType = imgTypeArr[imgTypeArr.length - 1];
      const convertedThumbnail = `data:image/${imgType};base64,${base64Img}`;
      items[_index].thumbnail = convertedThumbnail;
    }

    items[_index].pubDate = moment(items[_index.pubDate]).format("YYYY-MM-DD");

    return items[_index];
  } catch (err) {
    const message = err?.response?.data?.message;

    if (message) {
      throw new Error(message);
    }

    throw new Error(
      `Fetch to post error from userId: ${userId}, index: ${index}`,
    );
  }
};

module.exports = getPost;
