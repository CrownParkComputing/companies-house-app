import React, { useState } from 'react';
import axios from 'axios';

const CompanySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search/companies?q=${searchTerm}`, {
        auth: {
          username: '9589be88-df03-446f-8e66-1351b8498760',
          password: '',
        },
      });
      setSearchResults(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.company_number}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanySearch;