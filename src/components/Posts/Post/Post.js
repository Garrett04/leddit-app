import { useState } from "react";
import './Post.css';
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";
import { useSelector, useDispatch } from "react-redux";
import { likePost, dislikePost, selectAllPosts } from "../../../features/posts/postsSlice";

const Post = () => {
    const posts = useSelector(selectAllPosts);
    // console.log(Object.entries(posts));

    const dispatch = useDispatch();

    const handleLikeCount = (event, postId) => {
        // console.log(postId);
        // console.log(event.target.className); 
        // if (event.target.className == 1) {
        //     dispatch(dislikePost(postId));
        // } else {
        //     dispatch(likePost(postId));
        // }

        // Change Arrow to svg icon.
    }

    const renderPosts = Object.values(posts).map((post) => (
        <div key={post.id} className="post">
            <PostTop 
                likeCount={post.likeCount}
                title={post.title}
                id={post.id}
                handleLikeCount={handleLikeCount}
            />
            <div className="image-container">
                <img src={post.src}/>
            </div>
            <PostBottom 
                user={post.user}
                timestamp={post.timestamp}
                commentCount={post.commentCount}
                handleLikeCount={handleLikeCount}
            />
        </div>
    ))

    return (
        <>
            {renderPosts}
        </>
    );
}

export default Post;