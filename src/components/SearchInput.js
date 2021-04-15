import { navigate } from "hookrouter";
import { useState } from "react";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/search/" + value);
      }}
    >
      <label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </form>
  );
};
