import React, { useState, useMemo, useCallback, useEffect } from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch users from the API (or use a mock dataset)
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  // Handle search term input
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  // Memoize the filtered users list
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, users]);

  // Clear search functionality
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} onClear={clearSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : filteredUsers.length > 0 ? (
        <UserList users={filteredUsers} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default App;
