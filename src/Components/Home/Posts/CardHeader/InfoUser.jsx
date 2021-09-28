import React from 'react';
import { Link } from 'react-router-dom';


import UserImg from '../../../../Assets/uservd.jpg'
import './headercard.css'

const InfoUser = () => {
    return ( 
        <div className="info-card-post">
            <img src={UserImg}/>
            <div className="info-card-description">
                <Link to="/:nomeuser">Nome User</Link> <br />
                <small>Ciudad / Estado</small>
            </div>
        </div>
     );
}
 
export default InfoUser;