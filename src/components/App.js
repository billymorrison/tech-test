import '../styles/App.css';
import Search from './Search'
import SearchResults from './SearchResults'
import { useState } from 'react'

function App() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className="App" data-testid='app'>
      <img src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' className='header-logo' alt='NASA Logo'/>
      <Search className='search-bar' setSearchResults={setSearchResults} />
      <SearchResults images={searchResults} />
    </div>
  );
}

export default App;
