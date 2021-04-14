import { List } from "../components/List";
import { useSearch } from "../data";

export const Search = ({ query }) => <List videos={useSearch(query)} />;
