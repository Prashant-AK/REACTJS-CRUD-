import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../../../node_modules/bootstrap/js/dist/collapse.js'
function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="#">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/about">About</NavLink>
                    </li>
                    

                </ul>
            </div>
            <NavLink to="/adduser" className="align-right btn btn-outline-light">Add User</NavLink>
        </nav>

    )
}

export default Navbar
