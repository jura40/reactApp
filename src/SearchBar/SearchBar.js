import React from 'react';
import { useState } from 'react';

const repo = [
    'react',
    'c#',
    'angular',
    'database',
    'html',
    'w3skol',
    'data',
    'bootstrap'
]
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState ('')

    const Change = (event) => {
        setSearchValue(event.target.value)
    }

    const TaBort = () => {
        setSearchValue("")
    }
    const displayButton = searchValue.length > 0

    
     const filteradRepos = repo.filter((repos) => {
          return repos.includes(searchValue)
    })
    

  return(
  <div>
      <h1>sök här</h1>
      <input type= 'text' value = {searchValue} onChange={Change} />
      
      {displayButton && <button onClick={TaBort}>radera</button>}
      
      
    <ul>
      {filteradRepos.map((data) => {
          return <li key ={data}> {data}
          </li>
      })}
      </ul>
  </div>
      )
  
}

export default SearchBar;
