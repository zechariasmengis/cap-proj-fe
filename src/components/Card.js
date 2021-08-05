import '../css/Card.css';
import React, { useState } from 'react';
import holo from '../assets/brand/HOLO.png'

function Card({user_card}) {
    const [flip, setFlip] = useState(true);

    return(
        <main onClick={() => setFlip(!flip)} className={`pokemon-card ${flip ? 'flip' : ''}`}>
            {!flip ? <div className="front">
            <section className="title-row">
                <h1 className="name">{user_card.card.name}</h1>
                <p className="health">{user_card.card.hp} HP</p>
            </section>

            <section className="character-img">
                <img alt="char"
                    src={user_card.card.image}/>
            </section>

            <section className="character-ability">
                <span className="ability-cost">
                    <img alt ="icon" className="element-icon" src={require(`../assets/icons/${(user_card.card.card_type).toLowerCase()}.svg`).default}/>
                </span>
                <span className="ability-description">
                    <span className="ability-name">{user_card.card.ability}</span>
                </span>
                <p className="ability-damage">{user_card.card.ability_dmg}</p>
            </section>

            <section className="character-description">
                <p>{user_card.card.description}</p>
            </section>

            <section className="card-details">
                <p className="collector-card-number">46/120</p>
            </section>
            </div> : <div className="back" >
                <img src={require("../assets/brand/holologo.png").default}></img>
            </div>}
            
		</main>

    )
}

export default Card;