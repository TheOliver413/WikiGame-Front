import React from 'react'
import './NavBar.css'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar-div">
                <NavLink to="/"><button>Intro</button></NavLink>
                <NavLink to="/videogames"><button>Videogames</button></NavLink>
                <NavLink to="/crearjuego"><button>CrearJuego</button></NavLink>
                <SearchBar />
        </div>
    )
}

export default NavBar
