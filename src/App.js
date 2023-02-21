import { useState } from 'react';
import './App.css';
import logo from './github-logo.webp'

function App() {
  const [user,setUser]=useState('');
  const[userData,setUserData]=useState(null);
  
  function handleSearch(e){
    e.preventDefault();
    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => {
      setUserData(data)
    })
  }
  function handleChange(e){
    setUser(e.target.value)
  }
  return (
    <div className="App">
      <header>
        <div className="github">
          <img className='logo' src={logo} alt="" />
          <h1>Github Profile Search</h1>
        </div>
        <form>
          <label><h3>Enter github username:</h3></label>
          <input type="text" placeholder="search.." value={user} onChange={handleChange} />
          <button className="search" onClick={handleSearch}>Search</button>
        </form>
      </header>
      {userData ? (<div className='card'>
          <img src={userData.avatar_url}alt="User Avatar" />
          <h2>{userData.name}</h2>
          <h3>{userData.bio}</h3>
          <a href={userData.html_url}>viewprofile</a>
        </div>) : null}
        
    </div>
  );
}

export default App;
