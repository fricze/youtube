import { List } from "../components/List";
import { useMainList } from "../data";

export const Popular = () => <List videos={useMainList()} />;
