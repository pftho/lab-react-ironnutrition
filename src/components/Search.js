// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({ filterFood }) {
  const [SearchInput, setSearchInput] = useState('');
  const searchItems = (SearchInput) => {
    setSearchInput(SearchInput);
    filterFood(SearchInput);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={SearchInput}
        type="text"
        onChange={(e) => {
          searchItems(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
