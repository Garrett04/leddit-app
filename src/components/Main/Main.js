import { useEffect } from "react";
// import { likePost } from "../../features/subredditPosts/subredditPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import { 
    getSubredditPostsError, 
    getSubredditPostsStatus, 
    selectAllSubredditPosts,
} from "../../features/subredditPosts/subredditPostsSlice";
import { fetchSubredditPosts } from "../../data/redditData";
import { LoadingSpinner } from "./LoadingSpinner";
import Post from "./Post/Post";
import SubredditNav from "./SubredditNav/SubredditNav";

const Main = () => {
    const dispatch = useDispatch();
    const subredditPosts = useSelector(selectAllSubredditPosts);
    const subredditPostsStatus = useSelector(getSubredditPostsStatus);
    const error = useSelector(getSubredditPostsError);

    useEffect(() => {
        if (subredditPostsStatus === 'idle') {
            dispatch(fetchSubredditPosts())
        }
    }, [subredditPostsStatus, dispatch]);

    let cardContent;
    if (subredditPostsStatus === 'pending') {
        cardContent = <LoadingSpinner />;
    } else if (subredditPostsStatus === 'fulfilled') {
        // console.log(subredditPosts);
        cardContent = subredditPosts.map(post => {
            if (!post.over_18) {
                console.log(subredditPosts);
                return <Post key={post.id} post={post} />
            }
        })
    } else if (subredditPostsStatus === 'rejected') {
        cardContent = <p>{error}</p>;
    }

    // console.log(cardContent);

    return (
        <div className="mainContainer">
            <div className="subredditPostsContainer">
                {cardContent}
            </div>
            <aside>
                <SubredditNav />
            </aside>
        </div>
    );
}

export default Main;