import { Snippet } from "./Snippet";

export const List = ({ videos }) => (
  <div className="videos-list">
    {videos.map(({ id, snippet }) => (
      <Snippet key={id} id={id} {...snippet} />
    ))}
  </div>
);
