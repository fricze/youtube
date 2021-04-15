import { List } from "../components/List";
import { useSearch } from "../services/yt";

export const Search = ({ query }) => <List videos={useSearch(query)} />;
