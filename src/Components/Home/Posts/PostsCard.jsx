import React from 'react';
import HeaderCardPost from './CardHeader/HeaderCardPost';

import './postcard.css'
import ImagenPost from './ImagePost/ImagePost'
import BarAction from './BarActionsPost/BarAction';
import LikeUser from './Likes/LikeUsers';
import TimePost from './TimePost/TimePost';
import CommentFor from './NewComment/Comment'

const PostCard = () => {
    return (
        <div className="post-card">
            <HeaderCardPost/>
            <ImagenPost/>
            <BarAction/>
            <LikeUser/>
            <TimePost/>
            <CommentFor/>
            
        </div>
    );
}
 
export default PostCard;