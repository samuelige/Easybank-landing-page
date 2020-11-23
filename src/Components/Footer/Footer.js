import React from 'react'
import footerlogo from '../../images/footerlogo.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

import Button from '../Button/Button'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footContainer">
            <div className="logoAndMediaIcons">
                <div className="logo-container">
                    <img src={footerlogo} className="app__logo" alt="App logo" srcset=""/>
                </div>
                <div className="mediacons">
                    <FacebookIcon/>
                    <YouTubeIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                    <InstagramIcon />
                </div>
                    

            </div>
            <div className="firstNav">
                <h6>About</h6>
                <h6 className='navClass'>Contact</h6>
                <h6 className='navClass'>Blog</h6>
            </div>
            <div className="secondNav">
                <h6>Career</h6>
                <h6 className='navClass'>Support</h6>
                <h6 className='navClass'>Privacy Policy</h6>
            </div>
            <div className="requestAndCopyright">
                <Button >Request Invite</Button>
                <footer>&copy;Easybank. All Rights Reserved</footer>
            </div>
        </div>
    )
}

export default Footer
