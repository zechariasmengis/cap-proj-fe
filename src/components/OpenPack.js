import '../css/OpenPack.css'
import { div } from 'prelude-ls';
// import React, { useEffect, useState } from 'react'
import Card from './Card.js'
// Render page with empty card opening slate
// On 'open pack' button click post and create 6 new user_cards
// Render user_cards with info on page
// update state?
// Clear cards on another button click


function OpenPack() {

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
        .then(result => console.log(result))
    };

    return (
        <div className="main-container">
            <div className="card-board" >
                <p>hello</p>
            </div>
            <div className="button-container" >
                <button onClick={handleClick}> Open Pack </button>
            </div>
        </div>
    )
}

export default OpenPack;