import { useEffect } from "react";
// import { likePost } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPostsError, getPostsStatus, selectAllPosts } from "../../features/posts/postsSlice";
import { fetchSubredditData } from "../../data/redditData";
import { LoadingSpinner } from "./LoadingSpinner";
import Post from "./Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchSubredditData())
        }
    }, [postsStatus, dispatch]);

    let cardContent;

    if (postsStatus === 'pending') {
        cardContent = <LoadingSpinner />;
    } else if (postsStatus === 'fulfilled') {
        console.log(posts);
        cardContent = posts.map(post => <Post key={post.id} post={post} />)
    } else if (postsStatus === 'rejected') {
        cardContent = <p>{error}</p>;
    }

    return (
        <div className="postsContainer">
            {cardContent}
        </div>
    );
}

export default Posts;