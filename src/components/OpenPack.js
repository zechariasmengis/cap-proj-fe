import { div } from 'prelude-ls';
// import React, { useEffect, useState } from 'react'
import Card from './Card.js'
// Render page with empty card opening slate
// On 'open pack' button click post and create 6 new user_cards
// Render user_cards with info on page


function OpenPack() {

    const handleClick = () => {
        fetch('http://localhost:3000/users', {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(result => console.log(result))
    };

    return (
        <div>
            <button onClick={handleClick}> Open Pack </button>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default OpenPack;