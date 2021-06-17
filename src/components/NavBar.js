import '../css/NavBar.css'

function NavBar() {
    return(
        <div class="topnav">
            <a href="#home">Home</a>
            <a href="#news">My Cards</a>
            <a href="#contact">Add Packs</a>
            <a href="#about">Open Packs</a>
            <a className="nav-logout" href="#about">Logout</a>
        </div>
    )
}

export default NavBar;