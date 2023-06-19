import React from 'react'
import { Link } from 'react-router-dom'
import './UserNavbar.css'

function UserNavbar() {
    return (
        <sidebar className="sidenav">
            <div className="logo">logo</div>
            <div className="avatar">
                <div className="avatar__name">
                    <i className="menu__icon fa fa-user-circle"></i>
                    <span className="menu__text av">John</span>
                </div>
                <div className="avatar__name">
                    <i className="menu__icon fa fa-sign-out"></i>
                    <span className="menu__text av">Logout</span>
                </div>
            </div>
            <nav className="menu">
                <Link className="menu__item" to="/user/overview">
                    <i className="menu__icon fa fa-home"></i>
                    <span className="menu__text">overview</span>
                </Link>
                <Link className="menu__item" to='/user/messages'>
                    <i className="menu__icon fa fa-envelope"></i>
                    <span className="menu__text">messages</span>
                </Link>
                <Link className="menu__item menu__item--active" to='/user/calendar'>
                    <i className="menu__icon fa fa-calendar"></i>
                    <span className="menu__text">calendar</span>
                </Link>
            </nav>
        </sidebar>
    )
}

export default UserNavbar
