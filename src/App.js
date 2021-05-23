// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { selectUserName } from './features/userSlice';
import { useSelector } from 'react-redux';


function App() {
  const userName = useSelector(selectUserName)

  return (
    <div className="App">
      <header className="App-header">
        {
          !userName ? (
            <Login />
          ):(
            <Home />
          )
        }
      </header>
    </div>
  );
}

export default App;