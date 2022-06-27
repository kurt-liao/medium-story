const axios = require("axios");

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

    if (!items || !items[index || 0]) {
      throw new Error("No post matched");
    }

    return items[index || 0];
  } catch (err) {
    const message = err?.response?.data?.message;

    if (message) {
      throw new Error(message);
    }

    throw new Error(
      `Fetch to post error from userId: ${userId}, index: ${index || 0}`,
    );
  }
};

module.exports = getPost;
