import React from 'react'
import s from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";


const Navbar = () => {
    return (

        <div className={s.navbar}>
            <div><NavLink to="/content" activeClassName={s.active}>Content</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></div>
            <div><Link to="/messages">Messages</Link></div>
            <div><a href="/news">News</a></div>
            <div><a href="/music">Music</a></div>
            <div><a href="/settings">Settings</a></div>
        </div>
    )
}


export default Navbar