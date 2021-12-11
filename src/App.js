import * as React from 'react';
import { Search } from '../src/Components/Search'
import { List } from '../src/Components/List'
import { Stories } from './utils'
import { Car } from './Components/Car'
import { handleSearch } from './utils'

const App = () => {


  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
  <List list={Stories} /> 
  <br></br>
  <hr />
  <Car color="Blue" brand="uwu"></Car>

    </div>
  );
};


export default App;
