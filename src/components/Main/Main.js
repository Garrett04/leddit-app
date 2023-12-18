import { useEffect } from "react";
// import { likePost } from "../../features/subredditPosts/subredditPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getsubredditPostsError, getsubredditPostsStatus, selectAllData } from "../../features/subredditsubredditPosts/subredditsubredditPostsSlice";
import { fetchSubredditsubredditPosts } from "../../data/redditData";
import { LoadingSpinner } from "./LoadingSpinner";
import Post from "./Post/Post";
import SubredditNav from "./SubredditNav/SubredditNav";

const Main = () => {
    const dispatch = useDispatch();
    const subredditPosts = useSelector(selectAllData);
    const subredditPostsStatus = useSelector(getsubredditPostsStatus);
    const error = useSelector(getsubredditPostsError);

    useEffect(() => {
        if (subredditPostsStatus === 'idle') {
            dispatch(fetchSubredditsubredditPosts())
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