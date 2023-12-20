import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getSubredditPostsError, 
    getSubredditPostsStatus, 
    selectAllSubredditPosts,
} from "../../features/subredditPosts/subredditPostsSlice";

import { fetchSubredditData, fetchSubredditPosts } from "../../data/redditData";
import { LoadingSpinner } from "./LoadingSpinner";
import Post from "./post/Post";
import SubredditNav from "../subredditNav/SubredditNav";
import {  
    getSubredditsStatus, 
    selectAllSubreddits,
} from "../../features/subredditData/subredditsSlice";
import { useSearchParams, useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


const Main = ({subreddit}) => {
    const dispatch = useDispatch();
    const subredditPosts = useSelector(selectAllSubredditPosts);
    const subredditPostsStatus = useSelector(getSubredditPostsStatus);
    const error = useSelector(getSubredditPostsError);

    const subreddits = useSelector(selectAllSubreddits);
    const subredditsStatus = useSelector(getSubredditsStatus);
    const [ searchParams ] = useSearchParams();
    const sort = searchParams.get('sort');

    useEffect(() => {
        if (subreddit || sort) {
            dispatch(fetchSubredditPosts({
                subreddit: subreddit,
                sort: sort,
            }));
        }
    }, [ subreddit ]);

    useEffect(() => {
        if (subredditPostsStatus === 'idle') {
            dispatch(fetchSubredditPosts({
                subreddit: undefined,
            }))
        }

        if (subredditPostsStatus === 'fulfilled' && subredditsStatus === 'idle') {
            dispatch(fetchSubredditData())
        }
    }, [ subredditPostsStatus, fetchSubredditData, dispatch ]);

    let cardContent;
    if (subredditPostsStatus === 'pending') {
        cardContent = <CircularProgress size='7rem'/>;
    } else if (subredditPostsStatus === 'fulfilled' && subredditsStatus === 'fulfilled') {
        cardContent = subredditPosts.map(post => {
            if (!post.over_18) {
                // console.log(subredditPosts);
                return <Post key={post.id} post={post} />
            }
        })
    } else if (subredditPostsStatus === 'rejected') {
        cardContent = <p>{error}</p>;
    }

    const term = searchParams.get('term')
    
    // console.log(cardContent);
    
    return (
        <div className="mainContainer">
            <div className="subredditPostsContainer">
            {term ? <h2>{`Search results for ${term}`}</h2> : null}
                {cardContent}
            </div>
            <SubredditNav subreddit={subreddits} />
        </div>
    );
}

export default Main;