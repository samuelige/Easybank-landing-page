import { findAllByTitle } from '@testing-library/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../Components/Button/Button'
import mockups from '../../images/image-mockups.png'
import backgroundImage from '../../images/bg-intro-desktop.svg'
import './Home.scss'
import ContentCard from '../../Components/ContentCard/ContentCard'
import Article from '../../Components/ArticleCard/ArticleCard'


const Home = () => {
    const state = useSelector(state => state.headContent)
    // console.log(state)
    // const contentStateData = useSelector(state => state.contentData)
    // console.log(contentStateData);
    return (
        <>
            <div className="content-header-container">
                <div className="content-header">
                    <h2 className='title'>{state.title}</h2>
                    <p className='paragraph'>{state.paragraph}</p>
                    <div className="requestButton">
                        <Button>Request Invest</Button>
                    </div>
                </div>
                <div className="sideImage">
                    <img  className='b-image' src={backgroundImage} alt="Background Image"/>
                    <img  className='s-image' src={mockups} alt="Mockups image"/>
                </div>
            </div>
            <div className="whyChooseUs">
                <h2 className='easyBank'>Why choose Easybank? </h2>
                <p >We leverage Open Banking to turn your bank account into your financial hub. 
                    <br/>Control your finances like never before. 
                </p>
                <ContentCard />
            </div>
            <div className="article">
                <h2 className='latest'>Latest Articles</h2>
                <Article />
            </div>
        </>
    )
}

export default Home
