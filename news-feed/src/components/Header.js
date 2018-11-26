import React from 'react'
import Moment from 'react-moment';

const Header = () => {
    return (
        <div className='header'>
            <h2>News Feed</h2>
            <Moment format='dddd D MMM YYYY' withTitle/>
        </div>
    )
}

export default Header;