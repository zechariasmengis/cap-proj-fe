import '../css/NavBar.css'

function NavBar() {
    return(
        <div className="topnav">
            <a href="/">Home</a>
            <a href="/mycards">My Cards</a>
            <a href="#">Add Packs</a>
            <a href="/packs">Open Packs</a>
            <a className="nav-logout" href="#">Logout</a>
        </div>
    )
}

export default NavBar;