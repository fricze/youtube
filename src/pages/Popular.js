import { List } from "../components/List";
import { useMainList } from "../services/yt";

export const Popular = () => <List videos={useMainList()} />;
