import './Post.css';
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";
import PostMiddle from "./PostMiddle";

const Post = ({post}) => {
    return (
        <div className='post'>
            <PostTop
                likeCount={post.ups}
                title={post.title}
                subreddit={post.subreddit}
            />
            <PostMiddle 
                url={post.url} 
                is_video={post.is_video} 
                media={post.media}
                selftext={post.selftext}
                thumbnail={post.thumbnail}
                domain={post.domain}
                title={post.title}
            />
            <PostBottom 
                user={post.author}
                timestamp={post.created}
                commentCount={post.num_comments}
            />
        </div>
    );
}

export default Post;