import React from 'react'
import logo from './emoji.jpg'
import {NavLink} from 'react-router-dom'
function NotFound() {
    return (
        <div className="not-found">
            <div><img className="rounded mx-auto d-block" src={logo}/></div>
            <div><h1 className="display-1">Page Not Found</h1>
            <NavLink className="btn-lg btn-success" to='/'> Back To Home</NavLink></div>
        </div>
    )
}

export default NotFound
