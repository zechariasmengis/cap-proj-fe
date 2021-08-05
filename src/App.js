import { useState, useEffect } from 'react';
import './App.css';
import './css/reset.css';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import Home from './components/Home';
import AllCardList from './components/AllCardList';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import OpenPack from './components/OpenPack'
import MyProfile from './components/MyProfile'
import MyCardList from './components/MyCardList'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({username: '', user_cards: []});

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:3000/profile', {

        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            console.error(result.error);
          } else {
            handleUser(result);
          }
        })
    }
  }, [])

  

  const handleLogin = () => setIsLoggedIn(true);
  // const handleLogout = () => setIsLoggedIn(false);

  function handleUser(result) {
    if (isLoggedIn == false) {
      setIsLoggedIn(true)
    }
    setCurrentUser({
      username: result.username,
      user_cards: result.user_cards
    })
  };

  function deleteUserCard(user_card) {
    // console.log(`Hello ${user_card.card.name}`)
    fetch(`http://localhost:3000/user_cards/${user_card.id}`, {

      method: 'DELETE',
      headers: {
      Authorization: `Bearer ${localStorage.token}`,
      Accepts: 'application/json',
      'Content-type': 'application/json'
      }
    })
    .then(() => {
      removeUserCardFromState(user_card)
    })
  };

  function removeUserCardFromState(user_card) {
    setCurrentUser(prevUser => ({
      ...prevUser,
      user_cards: [...prevUser.user_cards.filter((c) => c.id !== user_card.id)]
    }))
  }

  return (
    <div className="App">
      {isLoggedIn
        ? <NavBar />
        : null
      }
      <Route exact path="/" render={(routerProps) => <Home {...routerProps}/>} />
      <Route path="/allcards" render={(routerProps) => <AllCardList {...routerProps}/>} />
      <Route path="/mycards" render={(routerProps) => <MyCardList {...routerProps} currentUser={currentUser} deleteUserCard={deleteUserCard}/>} />
      <Route path="/myprofile" render={(routerProps) => <MyProfile {...routerProps} />} />
      <Route path="/signup" render={(routerProps) => <SignUpForm {...routerProps} />} />
      <Route path="/login" render={(routerProps) => <LogInForm {...routerProps} handleLogin={handleLogin} />} />
      <Route exact path="/packs" render={(routerProps) => <OpenPack {...routerProps} userinfo={currentUser}/>} />
    </div>
  );
}

export default App;
