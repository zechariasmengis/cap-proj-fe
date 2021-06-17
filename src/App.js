import { useState, useEffect } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import Home from './components/Home';
import AllCardList from './components/AllCardList';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:3000/users', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            console.error(result.error);
          } else {
            handleLogin();
          }
        })
    }
  })

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      {isLoggedIn
        ? <NavBar />
        : null
      }
      <Route exact path="/" render={(routerProps) => <Home {...routerProps}/>} />
      <Route path="/allcards" render={(routerProps) => <AllCardList {...routerProps}/>} />
      <Route path="/signup" render={(routerProps) => <SignUpForm {...routerProps} />} />
      <Route path="/login" render={(routerProps) => <LogInForm {...routerProps} handleLogin={handleLogin} />} />
    </div>
  );
}

export default App;
