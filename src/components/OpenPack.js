import '../css/OpenPack.css'
import React, { useState } from 'react'
import Card from './Card.js'
// Render page with empty card opening slate
// On 'open pack' button click post and create 6 new user_cards
// Render user_cards with info on page
// update state?
// Clear cards on another button click


function OpenPack() {

    const [userCards, setUserCards] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        fetch('http://localhost:3000/user_cards', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                Accepts: 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        // .then(result => console.log(result))
        .then(result => handleResult(result))
    };

    function handleResult(result) {
        setUserCards(result)
        setDisabled(true)
          console.log(result)
    };

    function handleClear() {
        setUserCards([])
        setDisabled(false)
    };



    return (
        <div className="main-container">
            <div className="button-container" >
                <button disabled={disabled} onClick={handleClick} className="open-pack-button button"> Open Pack </button>
                <button onClick={handleClear} className="clear-button button"> Add Cards to Collection </button>
            </div>
            <div className="card-board-container" >
                <div className="card-board" >
                    {userCards.map(user_card => {return (
                    <div className="user-card-container">
                        <Card user_card={user_card}/>
                    </div>)})}
{/* 
                    <div className="card-container" >
                        < Card />
                    </div>
                    <div className="card-container" >
                        < Card />
                    </div>
                    <div className="card-container" >
                        < Card />
                    </div>
                    <div className="card-container" >
                        < Card />
                    </div>
                    <div className="card-container" >
                        < Card />
                    </div>
                    <div className="card-container" >
                        < Card />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default OpenPack;