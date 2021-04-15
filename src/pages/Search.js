import { List } from "../components/List";
import { Paging } from "../components/Paging";
import { useSearch } from "../services/yt";

const Info = ({ infoText }) => <div className="search-info">{infoText}</div>;

export const Videos = ({ query, pageToken }) => {
  const videos = useSearch({ query, pageToken });
  return (
    <div>
      <Info infoText={"Videos for '" + unescape(query) + "'"} />

      <Paging path={"/search/" + query + "/"} {...videos} />
      <List {...videos} />
      <Paging path={"/search/" + query + "/"} {...videos} />
    </div>
  );
};

export const Search = ({ pageToken, query, infoText }) =>
  query ? (
    <Videos query={query} pageToken={pageToken} />
  ) : infoText ? (
    <Info infoText={infoText} />
  ) : (
    <div />
  );
