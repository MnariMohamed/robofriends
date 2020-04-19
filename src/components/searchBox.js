import React from 'react';

function searchBox({onSearchChange}) {
  return (
    <div className="pa2">
<input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={onSearchChange} />
  </div>
  );
}

export default searchBox;
