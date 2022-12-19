import React from 'react';
import '../styles/navbar.css'

function Navbar(){
    return(
        <>
            <nav>
                <div className='nav-container'>
                <ul>
                    <li><a href='#'>Group no.</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;