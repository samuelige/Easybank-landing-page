import React from 'react'
import Button from '../Components/Button/Button'
import logo from '../images/logo.svg'
import Navigation from '../Navigation/Navigation'
import './Header.scss';
const Header = () => {
    return (
        <div className="header">
           <div className="logo-container">
                <img src={logo} className="app__logo" alt="App logo" srcset=""/>
           </div>
            <Navigation />
            <div className='btn'>
                <Button>Request Invite</Button>
            </div>
            
        </div>
    )
}

export default Header
