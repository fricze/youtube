import { List } from "../components/List";
import { useSearch } from "../data";

export const Search = () => <List videos={useSearch()} />;
