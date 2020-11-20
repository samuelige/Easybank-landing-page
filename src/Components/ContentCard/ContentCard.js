import React from 'react'
import { useSelector } from 'react-redux'
import './ContentCard.scss'


const Card = ({id, avatarClassName, className, avatar, contentTitle, contentParagraph}) => {
    return (
        <div className={className}>
            <img className={avatarClassName} src={avatar} alt="contentIcon"/>
            <h4 key={id}>{contentTitle}</h4>
            <p>{contentParagraph}</p>
        </div>
    )
}

const ContentCard = () => {
    const contentStateData = useSelector(state => state.contentData.contData)
    console.log(contentStateData);
    return (
        <div className='card-container'>
            {
                contentStateData && 
                contentStateData.map(({id, avatarClassName, classname, avatar, contentTitle, contentParagraph} ) => {
                    return (
                        <Card key={id} avatarClassName={avatarClassName} className={classname} avatar= {avatar} contentTitle= {contentTitle} contentParagraph={contentParagraph} />
                    ) 
                })
            }
        </div>
    )
}

export default ContentCard
