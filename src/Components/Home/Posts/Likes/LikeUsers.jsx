import React from 'react';

import './likeusers.css'

const LikeUser = () => {
    return ( 
        <div className="like-users">
            <div className='img-users'></div>
            <small className="description-like">Curtido por <button>NomePerfil</button> e outras nro perssoas </small>
        </div>
     );
}
 
export default LikeUser;