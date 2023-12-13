import { useState } from "react";
import './Post.css';

const Post = () => {
    return (
        <>
            <div className="post">
                <div className="top">
                    <div className="like-dislike">
                        <div className="like-arrow">
                            <div className="line"></div>
                        </div>
                        <p className="like-count">2.3k</p>
                        <div className="dislike-arrow">
                            <div className="line"></div>
                        </div>
                    </div>
                    <h2>check check check check check chekc hcek check check check check check check check check chekch</h2>
                </div>
                    <div className="image-container">
                        <img src='./images/example image 1.jpg'/>
                    </div>
            </div>
            <div className="post">
                <div className="top">
                    <div className="like-dislike">
                        <div className="like-arrow">
                            <div className="line"></div>
                        </div>
                        <p className="like-count">12.3k</p>
                        <div className="dislike-arrow">
                            <div className="line"></div>
                        </div>
                    </div>
                    <h2>Example post 2</h2>
                </div>
                <div className="image-container">
                    <img src='./images/example image 2.jpg'/>
                </div>
            </div>
        </>
    );
}

export default Post;