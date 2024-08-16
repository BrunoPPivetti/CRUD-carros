import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
    return(
        <nav className="Container">
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to='/AdicionarCarro'> AdicionarCarro </Link></li>
                <li><Link to='/Carros'> Carros cadastrados </Link></li>
                <li><Link to='/Sobre'> Sobre </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar