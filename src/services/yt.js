import { useEffect, useState } from "react";

const API_KEY = "";

export const usePopular = ({ pageToken }) => {
  const [list, setList] = useState({ items: [] });

  const url =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=PL&key=${API_KEY}` +
    (pageToken ? `&pageToken=${pageToken}` : "");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ items, prevPageToken, nextPageToken }) =>
        setList({ items, prevPageToken, nextPageToken })
      );
  }, [url]);

  return list;
};

export const useSearch = ({ query, pageToken }) => {
  const [list, setList] = useState({ items: [] });

  const url =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${query}&key=${API_KEY}` +
    (pageToken ? `&pageToken=${pageToken}` : "");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ items, prevPageToken, nextPageToken }) =>
        setList({
          items: items.map((item) => ({ ...item, id: item.id.videoId })),
          prevPageToken,
          nextPageToken,
        })
      );
  }, [query, url]);

  return list;
};

export const useVideo = (id) => {
  const [video, setVideo] = useState();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=${id}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((video) => setVideo(video.items[0]));
  }, [id]);

  return video;
};
