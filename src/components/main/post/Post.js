import './Post.css';
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";
import PostMiddle from "./PostMiddle";

import { useState } from 'react';

const Post = ({post}) => {
    
    console.log(post.id);
    const [ showComments, setShowComments ] = useState(false);
    
    console.log(post.name)
    
    // name from the post and parent_id from the comments should be the same to showComments.
    
    const handleShowComments = () => {
      setShowComments(!showComments);
    }
    
    return (
        <div className='post'>
            <PostTop
                likeCount={post.ups}
                title={post.title ? post.title : post.link_title}
                subreddit={post.subreddit}
            />
            <PostMiddle 
                url={post.url ? post.url : post.link_url}
                is_video={post.is_video} 
                media={post.media}
                body={post.selftext ? post.selftext : post.body}
                thumbnail={post.thumbnail}
                domain={post.domain}
                title={post.title ? post.title : post.link_title}
            />
            <PostBottom 
                user={post.author}
                timestamp={post.created}
                commentCount={post.num_comments}
                id={post.name}
                permalink={post.permalink}
                showComments={showComments}
                handleShowComments={handleShowComments}
            />
        </div>
    );
}

export default Post;