import { useEffect, useState } from "react";

const API_KEY = "AIzaSyDHAysMhipieU7n_6M8cAfE1xNduI9lXRY";

export const useMainList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then(({ items }) => setList(items));
  }, []);

  return list;
};

export const useSearch = () => {
  const search = "american gods";

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then(({ items }) => setList(items));
  }, []);

  console.log(list);

  return list;
};
