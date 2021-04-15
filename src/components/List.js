import { Snippet } from "./Snippet";

export const List = ({ items }) => (
  <div className="videos-list">
    {items.map(({ id, snippet }) => (
      <Snippet key={id} id={id} {...snippet} />
    ))}
  </div>
);
