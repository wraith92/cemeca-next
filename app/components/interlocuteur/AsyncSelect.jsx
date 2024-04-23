import React from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce'; // You might need to install lodash.debounce

const fetchOptions = async (inputValue, callback) => {
  try {
    const response = await fetch(`/api/societes?query=${encodeURIComponent(inputValue)}`);
    const data = await response.json();
    const options = data.map(societe => ({
      label: societe.nom_soc,
      value: societe.id,
    }));
    callback(options);
  } catch (error) {
    console.error('Error fetching data:', error);
    callback([]);
  }
};

// Debouncing the fetch operation to improve performance
const debouncedFetchOptions = debounce(fetchOptions, 300);

const loadOptions = (inputValue, callback) => {
  if (!inputValue) return []; // Optionally prevent search on empty input
  debouncedFetchOptions(inputValue, callback);
};

const CustomAsyncSelect = ({ onChange }) => {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onChange={onChange}
      placeholder="Search for a société"
    />
  );
};

export default CustomAsyncSelect;
