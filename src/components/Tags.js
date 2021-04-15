import { A } from "hookrouter";

export const Tags = ({ tags }) =>
  tags ? (
    <ul className="video-tags">
      {tags.map((tag) => (
        <li>
          <A href={`/search/${tag}`}>{tag}</A>
        </li>
      ))}
    </ul>
  ) : null;
