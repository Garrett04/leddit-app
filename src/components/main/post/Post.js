import './Post.css';
import PostBottom from "./PostBottom";
import PostTop from "./PostTop";
import PostMiddle from "./PostMiddle";
import { getCommentsStatus } from '../../../features/posts/commentsSlice';
import { useSelector } from 'react-redux';
import Comments from './comments/Comments';

const Post = ({post}) => {
    const commentsStatus = useSelector(getCommentsStatus);
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
                permalink={post.permalink}
            />
            {/* {commentsStatus === 'fulfilled' ? <Comments /> : null} */}
        </div>
    );
}

export default Post;