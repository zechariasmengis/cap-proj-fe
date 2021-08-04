import '../css/Card.css'

function Card({card}) {
    return(
        <main className="pokemon-card">
            <section className="title-row">
                <p className="rarity">Basic</p>
                <h1 className="name">{card.name}</h1>
                <p className="health">50 HP</p>
                <img alt="element" className="element-icon" src="./fire.png"/>
            </section>

            <section className="character-img">
                <img alt="char"
                    src="https://static.wikia.nocookie.net/pokemon-and-digimon/images/6/63/Ash_Charmander.png/revision/latest?cb=20160113223827"/>
            </section>

            <section className="character-ability">
                <span className="ability-cost">
                    <img alt ="icon" className="element-icon" src="./fire.png"/>
                </span>
                <span className="ability-description">
                    <span className="ability-name">Scratch</span>
                </span>
                <p className="ability-damage">10</p>
            </section>
            {/* <section class="character-ability">
                <span class="ability-cost">
                    <img class="element-icon" src="./fire.png"/>
                    <img class="element-icon" src="./fire.png"/>
                    <img class="element-icon" src="./fire.png"/>
                    <img class="element-icon" src="./fire.png"/>
                </span>
                <span class="ability-description">
                    <span class="ability-name">Ember</span>
                    <p>Discard 1 <img class="element-icon" src="./fire.png" /> Energy card attached to Charmander in order to use
                        this
                        attack.</p>
                </span>
                <p class="ability-damage">30</p>
            </section> */}

            {/* <section class="character-stats">
                <span class="character-stat">
                    <p>weakness</p>
                    <img class="element-icon" src="./fire.png"/>
                </span>
                <span class="character-stat">
                    <p>resistance</p>
                </span>
                <span class="character-stat">
                    <p>retreat cost</p>
                    <img class="element-icon" src="./fire.png"/>
                </span>
            </section> */}

            <section className="character-description">
                <p>Obviously prefers hot places. If it gets caught in the rain, steam is said to sput from the tip of its tail.
                    LV.10 #4</p>
            </section>

            <section className="card-details">
                {/* <p class="artist">LiLus. Mitsuhire Arita</p> */}
                {/* <p class="company">&copy;1995, 96, 96</p> */}
                <p className="collector-card-number">46/120</p>
            </section>
		</main>

    )
}

export default Card;