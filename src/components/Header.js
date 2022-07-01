import React from 'react';

import './Header.css';

function Header(props) {
    return(
        <div id='navbar'>
            <img alt='logo' src={process.env.PUBLIC_URL + '/img/yatagarasub.svg'} className='logo'/>

            <button onClick={props.handleClick}>
                Logout
            </button>

            <div className='links'>

                <h3 className='title'>Sample API</h3>
                
                <a href='/search' className='nostyle'>
                    <h3 className='normal' style={props.search}>Search</h3>
                </a>
                <a href='/edit-profile' className='nostyle'>
                    <h3 className='normal' style={props.edit}>Edit User</h3>
                </a>
                <a href='/sign-up' className='nostyle'>
                    <h3 className='normal' style={props.signup}>Sign Up</h3>
                </a>
                <a href='/log-in' className='nostyle'>
                    <h3 className='normal' style={props.login}>Log In</h3>
                </a>
            </div>
        </div>
    )
}

export default Header