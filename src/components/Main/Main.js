import { useEffect } from "react";
// import { likePost } from "../../features/subredditPosts/subredditPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import { 
    getSubredditPostsError, 
    getSubredditPostsStatus, 
    selectAllSubredditPosts,
} from "../../features/subredditPosts/subredditPostsSlice";

import { fetchSubredditData, fetchSubredditPosts } from "../../data/redditData";
import { LoadingSpinner } from "./LoadingSpinner";
import Post from "./Post/Post";
import SubredditNav from "./SubredditNav/SubredditNav";
import { 
    getSubredditsError, 
    getSubredditsStatus, 
    selectAllSubreddits,
} from "../../features/subredditData/subredditsSlice";

const Main = () => {
    const dispatch = useDispatch();
    const subredditPosts = useSelector(selectAllSubredditPosts);
    const subredditPostsStatus = useSelector(getSubredditPostsStatus);
    const error = useSelector(getSubredditPostsError);

    const subreddits = useSelector(selectAllSubreddits);
    const subredditsStatus = useSelector(getSubredditsStatus);
    const subredditsError = useSelector(getSubredditsError);

    useEffect(() => {
        if (subredditPostsStatus === 'idle' && subredditsStatus === 'idle') {
            dispatch(fetchSubredditPosts())
            dispatch(fetchSubredditData())
        }
    }, [subredditPostsStatus, subredditsStatus, dispatch]);

    let cardContent;
    if (subredditPostsStatus === 'pending') {
        cardContent = <LoadingSpinner />;
    } else if (subredditPostsStatus === 'fulfilled') {
        cardContent = subredditPosts.map(post => {
            if (!post.over_18) {
                // console.log(subredditPosts);
                return <Post key={post.id} post={post} />
            }
        })
    } else if (subredditPostsStatus === 'rejected') {
        cardContent = <p>{error}</p>;
    }

    // console.log(cardContent);
    console.log(subreddits)

    return (
        <div className="mainContainer">
            <div className="subredditPostsContainer">
                {cardContent}
            </div>
            <aside>
                <SubredditNav subreddits={subreddits} />
            </aside>
        </div>
    );
}

export default Main;