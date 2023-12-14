import { useState } from "react";
import './Post.css';
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";

const Post = () => {
    return (
        <>
            <div className="post">
                <PostTop 
                    likeCount={'27.8k'}
                    title={'Check Check Check Check Check Check Check Check Check Check'} 
                />
                    <div className="image-container">
                        <img src='./images/example image 1.jpg'/>
                    </div>
                <PostBottom 
                    user={'RandomUser1'}
                    timestamp={'8 minutes'}
                    commentCount={'245'}
                />
            </div>
            <div className="post">
                <PostTop 
                    likeCount={'23.5k'}
                    title={'Example Example Example example example example example example example example 12345678901234'} 
                />
                <div className="image-container">
                    <img src='./images/example image 2.jpg'/>
                </div>
                <PostBottom 
                    user={'RandomUser2'}
                    timestamp={'10 minutes'}
                    commentCount={'125'}
                />
            </div>
        </>
    );
}

export default Post;