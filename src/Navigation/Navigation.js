import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="">About</Link>
                </li>
                <li>
                    <Link to="">Contact</Link>
                </li>
                <li>
                    <Link to="">Blog</Link>
                </li>
                <li>
                    <Link to="">Careers</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
