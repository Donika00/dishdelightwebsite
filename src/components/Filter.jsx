import React from "react";

const Filter = ({ categories, onFilterChange }) => {
  return (
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="">All</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default Filter;
