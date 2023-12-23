import React, { useState } from 'react';
import axios from 'axios';


const CompanySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search/companies?q=${searchTerm}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
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
          <p key={result.id} >
            : {result.title} 
            : {result.description}
          </p>
        ))},
      </ul>
      
    </div>
  );
};

export default CompanySearch;