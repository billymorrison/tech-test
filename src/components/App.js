import '../styles/App.css';
import Search from './Search'

function App() {
  return (
    <div className="App" data-testid='app'>
      <img src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg' className='header-logo' alt='NASA Logo'/>
      <Search className='search-bar' />
    </div>
  );
}

export default App;
