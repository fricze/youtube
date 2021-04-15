import { List } from "../components/List";
import { useSearch } from "../services/yt";

const Info = ({ infoText }) => <div>{infoText}</div>;
const Videos = ({ query }) => <List videos={useSearch(query)} />;

export const Search = ({ query, infoText }) =>
  query ? (
    <Videos query={query} />
  ) : infoText ? (
    <Info infoText={infoText} />
  ) : (
    <div />
  );
