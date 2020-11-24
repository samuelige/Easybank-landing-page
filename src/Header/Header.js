import React, { useState } from 'react'
import Button from '../Components/Button/Button'
import logo from '../images/logo.svg'
import Navigation from '../Navigation/Navigation'
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import './Header.scss';
import SlideNavbar from '../Components/SlideNavbar/SlideNavbar';
// import SideDrawer from '../Components/SideDrawer/SideDrawer';
// import Backdrop from '../Components/Backdrop/Backdrop';
const Header = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(true)

    // const [dehazeIcon, setDehazeIcon] = useState( false)
    const [width, setWidth]= useState('')
    // const [close, setClose] = useState('')


    const openDrawerHandler = () => {
        setDrawerIsOpen(false);
      };
    
      const closeDrawerHandler = () => {
        setDrawerIsOpen(true);
      };

    const openNavbar = () =>  {
        setDrawerIsOpen(false)
        if(drawerIsOpen === true) {
            setWidth('50px')
          }else {
            setWidth('500px')
          }
    }

    const closeNavbar = () => {
        // if (openNav !== true) {
        // openNavbar();
        // }
    }
    // console.log(openNavbar)
    return (
    
            <div className="header">
                {
                    drawerIsOpen ?  
                    <div className="logo-container">
                        <img src={logo} className="app__logo" alt="App logo" srcset=""/>
                    </div>
                    :
                    null
                }

                {drawerIsOpen ? <DehazeIcon className='open'  onClick={openDrawerHandler}/> : <CloseIcon className='close' onClick= {closeDrawerHandler} />}
                {/* <DehazeIcon  className='open'  onClick={openDrawerHandler}/>  */}
                {/* {
                    !drawerIsOpen && (
                        <div className='slide' onRequestClose={closeDrawerHandler}>
                            <SlideNavbar />
                            <CloseIcon className='close' onClick= {closeDrawerHandler} />
                        </div>
                    )
                } */}

                {
                    !drawerIsOpen && (
                            <SlideNavbar />
                    )
                    // <CloseIcon className='close' onClick= {closeDrawerHandler} />
                }
                
                
                <div className="vigation">
                <Navigation />
                </div>
                    
                <div className='btn'>
                    <Button>Request Invite</Button>
                </div>
            </div>

    )
}

export default Header
