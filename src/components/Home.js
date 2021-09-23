import '../css/Home.css'

function Home() {
    return (
        <div className="main-container" >
            <div className="welcome-card" >
                <div className="welcome-header" >
                    <h1>Welcome to Holo</h1>
                </div>
                <div className="welcome-body" >
                    <li>Visit "Open Packs" to open trading card packs and add to your collection</li>
                    <li>Collect available cards and keep track of them in your "My Cards" section</li>
                    <li>Sell cards that you don't want in your collection</li><br/>
                    
                    <h2>Coming soon</h2>
                    <li>Support for holographic cards and varying rarity</li>
                    <li>Weighted pack openings to reflect holographic/rarity</li>
                    <li>Credit balance to allow you to sell your cards for profit and pay to open more packs</li>
                    <li>Search for specific cards in your collection</li>
                    <li>Achievements for owning certain codes, opening certain amounts of packs, etc</li>
                    <li>Admin panel to quickly add new cards to the database</li>
                </div>
                <div className="welcome-footer" ><h2>Happy trading! 😊</h2></div>
            </div>
        </div>
    )
}

export default Home;