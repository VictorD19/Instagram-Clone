import React from 'react';
import FeedContent from './Feed/Feedcontent';

import './home.css'
import PostCard from './Posts/PostsCard';

const Home = () => {
    return (
        <div className="home-content">
            <div className="content">
               <FeedContent/>
               <PostCard/>
            </div>
            <div className="right-content">
                barra lateral
            </div>
        </div>
    );
}
 
export default Home;