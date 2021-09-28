import React from 'react';

import ImgUsers from '../../../Assets/uservd.jpg'
import './feeditem.css'

const FeedItem = () => {

    const arrayUser = [1,2,3,4,5,6,7,8,9,0]

    return (
        <>
        {
         arrayUser.map( item => 
         <div className="feed-item" key={item}>
         <div className="img-feed">
            <img src={ImgUsers} alt="imgUser"   />
         </div>
         <small>Victor_08</small>
        </div>
         )
        }
        </>
    )
}
 
export default FeedItem;