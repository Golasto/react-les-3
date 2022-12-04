import React from "react";
import {Link, useNavigate} from "react-router-dom";
import profilelock from "./Paginas/profilelock";

const Nav = ({isAuthenticated, toggleIsAuthenticated}) => {

    const navigate = useNavigate()

    function handleLogin() {
        toggleIsAuthenticated( true )
        navigate("./profile-page")
    }
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    { isAuthenticated && <li><Link to="/blogposts">Blogposts</Link></li>}
                    <li><Link to="/login">Inloggen</Link></li>
                    { isAuthenticated && <li><Link to="/profile-page">Profiel</Link></li>}
                </ul>
                <div>
                    <button type="button" onClick={ () => {toggleIsAuthenticated(false)} }>Logout</button>
                    <button type="button" onClick={ handleLogin}>Login</button>
                </div>
            </nav>
        </>
    )
}
export default Nav