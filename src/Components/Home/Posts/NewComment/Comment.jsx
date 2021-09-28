import React from 'react';

import {GrEmoji} from 'react-icons/gr'
import './comment.css'

const Comment = () => {
    return ( 
        <div className="comment-container">
            <div className="emojin">
                <button><GrEmoji/></button>
            </div>
            <div className="input-text-comment">
                <input type="text"  placeholder="Adicione um comentario"/>
                <button>Publicar</button>
            </div>
        </div>

     );
}
 
export default Comment;