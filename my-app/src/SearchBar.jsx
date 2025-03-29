import React from 'react';

const SearchBar = React.memo(({ searchTerm, onSearchChange, onClear }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search for a user by name"
      />
      <button onClick={onClear}>Clear Search</button>
    </div>
  );
});

export default SearchBar;
