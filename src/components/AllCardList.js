import React, { useEffect, useState } from 'react'
import Card from './Card.js'

function AllCardList() {

    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/cards', {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(result => setAllCards(result));
    }, [])

    return (
        // Map over all cards and render a Card component for each
        <div>
            {/* {allCards.map(card => {
                return <Card card={card} />
            })} */}
        </div>
    )
}

export default AllCardList;