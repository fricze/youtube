import unescape from "unescape";

const Info = ({ infoText }) => <div className="search-info">{infoText}</div>;

export const Search = ({ pageToken, query, infoText }) =>
  query ? (
    <Info infoText={"Videos for '" + unescape(query) + "'"} />
  ) : infoText ? (
    <Info infoText={infoText} />
  ) : (
    <div />
  );
