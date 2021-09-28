import React from 'react';

import './headercard.css'
import InfoUser from './InfoUser';
import OptionsCard from './OptionsCard'

const HeaderCardPost = () => {
    return ( 
        <div className="header-card-post">
            <InfoUser/>
            <OptionsCard/>
        </div>
     );
}
 
export default HeaderCardPost;