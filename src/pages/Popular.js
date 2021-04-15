import { List } from "../components/List";
import { Paging } from "../components/Paging";
import { usePopular } from "../services/yt";

export const Popular = ({ pageToken }) => {
  const videos = usePopular({ pageToken });
  return (
    <div>
      <Paging {...videos} />
      <List {...videos} />
      <Paging {...videos} />
    </div>
  );
};
