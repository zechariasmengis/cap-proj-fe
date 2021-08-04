import '../css/Card.css'

function UserCard({user_card}) {
    return(
        <main className="pokemon-card">
            <section className="title-row">
                {/* <p className="rarity">Basic</p> */}
                <h1 className="name">{user_card.card.name}</h1>
                <p className="health">{user_card.card.hp} HP</p>
                {/* <img alt="element" className="element-icon" src="./fire.png"/> */}
            </section>

            <section className="character-img">
                <img alt="char"
                    src={user_card.card.image}/>
            </section>

            <section className="character-ability">
                <span className="ability-cost">
                    <img alt ="icon" className="element-icon" src={require(`../assets/icons/${(user_card.card.card_type).toLowerCase()}.svg`).default} />
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
                {/* <p class="artist">LiLus. Mitsuhire Arita</p> */}
                {/* <p class="company">&copy;1995, 96, 96</p> */}
                <p className="collector-card-number">46/120</p>
            </section>
		</main>

    )
}

export default UserCard;