import React from 'react'
import s from './Navbar.module.css'
import {Link} from "react-router-dom";


const Navbar = () => {
    return (

        <div className={s.navbar}>
            <div><Link to="/content">Content</Link></div>
            <div><Link to="/dialogs">Dialogs</Link></div>
            <div><Link to="/messages">Messages</Link></div>
            <div><a href="/news">News</a></div>
            <div><a href="/music">Music</a></div>
            <div><a href="/settings">Settings</a></div>
        </div>
    )
}


export default Navbar