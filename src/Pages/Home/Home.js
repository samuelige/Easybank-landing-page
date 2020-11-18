import { findAllByTitle } from '@testing-library/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../Components/Button/Button'
import mockups from '../../images/image-mockups.png'
import backgroundImage from '../../images/bg-intro-desktop.svg'
import './Home.scss'


const Home = () => {
    const state = useSelector(state => state.headContent)
    console.log(state)
    return (
        <div className="content-header-container">
            <div className="content-header">
                <h2 className='title'>{state.title}</h2>
                <h2 className='title'>{state.subTitle}</h2>
                <p className='paragraph'>{state.paragraph}</p>
                <p className='paragraph'>{state.firstSubParagraph}</p>
                <p className='paragraph'>{state.secondSubParagraph}</p>
                <div className="requestButton">
                    <Button>Request Invest</Button>
                </div>
            </div>
            <div className="sideImage">
                <img  className='b-image' src={backgroundImage} alt="Background Image"/>
                <img  className='s-image' src={mockups} alt="Mockups image"/>
            </div>
        </div>
    )
}

export default Home
