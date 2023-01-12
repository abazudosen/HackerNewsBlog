import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId: string) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data);

  return result;
};

export const getStoryIds = async (params: any) => {
  const result = await axios
    .get(newStoriesUrl, {
      params: {
        pageSize: 4,
      },
    })
    .then(({ data }) => data);

  return result;
};
