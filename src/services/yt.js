import { useEffect, useState } from "react";

const API_KEY = "AIzaSyDHAysMhipieU7n_6M8cAfE1xNduI9lXRY";

export const useMainList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then(({ items }) => setList(items));
  }, []);

  return list;
};

export const useSearch = (search) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${search}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then(({ items }) =>
        setList(items.map((item) => ({ ...item, id: item.id.videoId })))
      );
  }, [search]);

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
