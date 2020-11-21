import React from 'react'
import { useSelector } from 'react-redux'
import './ArticleCard.scss'


const ArticleCard = (({id, image, reference, header,text, className}) => {
    return (
        <div className='card'>
            <div className="imageContainer">
                <img key={id} className={className} src={image} alt=""/>
            </div>
            <div className="textContainer">
                <h6>{reference}</h6>
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
})

const Article = () => {
    const state = useSelector(state => state.articleData)

    return (
        <div className='article-card-container'>
            {
                state && 
                state.map(({id, className, image, reference, header,text}) => {
                    return (
                        <ArticleCard key={id} className={className} image={image} reference={reference} header={header} text={text} />
                    )
                })
            }
            
        </div>
    )
}

export default Article
