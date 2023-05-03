import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './nav/Nav'
import './header.css'

function Header() {
    return (
        <div>
            <div className='logodiv'>

                <NavLink to="/" className="logotext">
                    <h1 className='logoname'>WINTERFUEL</h1>
                </NavLink>


                <Nav />

            </div>

        </div>
    )
}

export default Header