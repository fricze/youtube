import { useEffect, useState } from "react";

const API_KEY = "AIzaSyDHAysMhipieU7n_6M8cAfE1xNduI9lXRY";

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
