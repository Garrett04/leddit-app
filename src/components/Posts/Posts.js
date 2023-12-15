import Post from "./Post/Post";
import { useEffect } from "react";
// import { likePost } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPostsError, getPostsStatus, selectAllPosts } from "../../features/posts/postsSlice";
import { fetchSubredditData } from "../../data/redditData";
import { LoadingSpinner } from "./LoadingSpinner";

const Posts = () => {
    const dispatch = useDispatch();
    
    const posts = useSelector(selectAllPosts);
    const status = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchSubredditData());
        }
    }, [status, dispatch]);

    let cardContent;

    if (status === 'pending') {
        cardContent = <LoadingSpinner />;
    } else if (status === 'fulfilled') {
        console.log(posts);
        cardContent = posts.map(post => <Post key={post.id} post={post} />)
    } else {
        cardContent = <p>{error}</p>
    }

    return (
        <div className="postsContainer">
            {cardContent}
        </div>
    );
}

export default Posts;