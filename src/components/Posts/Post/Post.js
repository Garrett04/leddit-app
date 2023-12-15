import { useState } from "react";
import './Post.css';
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";

const Post = ({post}) => {

    // const renderPosts = Object.values(posts).map((post) => ( // to render posts
    //     <div key={post.id} className="post">
    //         <PostTop 
    //             likeCount={post.likeCount}
    //             title={post.title}
    //             id={post.id}
    //             // handleLikeCount={handleLikeCount}
    //         />
    //         <div className="image-container">
    //             <img src={post.src}/>
    //         </div>
    //         <PostBottom 
    //             user={post.user}
    //             timestamp={post.timestamp}
    //             commentCount={post.commentCount}
    //             // handleLikeCount={handleLikeCount}
    //         />
    //     </div>
    // ))

    return (
        <div className="post">
            <PostTop
                likeCount={post.ups}
                title={post.title.substring(0, 90)}
                subreddit={post.subreddit}
            />
            <div className="image-container">
                <img src={post.url}/>
            </div>
            <PostBottom 
                user={post.author}
                timestamp={post.created}
                commentCount={post.num_comments}
            />
        </div>
    );
}

export default Post;