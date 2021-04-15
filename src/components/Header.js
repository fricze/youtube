import { A } from "hookrouter";
import { SearchInput } from "./SearchInput";

export const Header = () => (
  <div className="app-header">
    <A className="app-header-link" href="/">
      Popular videos
    </A>{" "}
    <br />
    <SearchInput />
  </div>
);
