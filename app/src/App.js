import React from 'react';
import FetchMe from './components/MyPage'
// import logo from './logo.svg';
import './App.css';
// import {fetchData} from './actions/'

function App() {
  return (
    <div className="App">
      <h1 className="Header bg-primary">React Redux</h1>
      <FetchMe/>
    </div>
  );
}

export default App;
