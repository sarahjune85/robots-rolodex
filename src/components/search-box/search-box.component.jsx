import React from "react";
import "./search-box.styles.css";

// functional component, as opposed to class component:
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // setState is an async function call! does not happen in immediate sense.
    // used a second argument function with this.state to show latest value in clg.
    onChange={handleChange}
  />
);
