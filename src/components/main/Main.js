import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getSubredditPostsError, 
    getSubredditPostsStatus, 
    selectAllSubredditPosts,
} from "../../features/subredditPosts/subredditPostsSlice";

import { 
  fetchSubreddits, 
  fetchSubredditPosts,
  fetchUsers,
} from "../../data/redditData";
import Post from "./post/Post";
import SubredditNav from "./subredditNav/SubredditNav";

import {  
    getSubredditsStatus, 
    selectAllSubreddits,
} from "../../features/subreddits/subredditsSlice";

import {
  getUsersStatus,
  selectAllUsers,
} from '../../features/users/usersSlice';

import { useSearchParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


const Main = ({subreddit, user}) => {
    const dispatch = useDispatch();
    const subredditPosts = useSelector(selectAllSubredditPosts);
    const subredditPostsStatus = useSelector(getSubredditPostsStatus);
    const error = useSelector(getSubredditPostsError);

    const subreddits = useSelector(selectAllSubreddits);
    const subredditsStatus = useSelector(getSubredditsStatus);
    
    const users = useSelector(selectAllUsers);
    const usersStatus = useSelector(getUsersStatus);
    
    const [ searchParams ] = useSearchParams();
    const sort = searchParams.get('sort');

    // console.log(user);

    console.log(subredditPosts);

    useEffect(() => {
        if (subreddit || sort) {
            dispatch(fetchSubredditPosts({
                subreddit: subreddit,
                sort: sort,
            }));
        }

        if (user || sort) {
            console.log(user);
            dispatch(fetchSubredditPosts({
                subreddit: undefined,
                sort: sort,
                user: user,
            }))
        }
    }, [ subreddit, user ]);

    useEffect(() => {
        if (subredditPostsStatus === 'idle' && subredditsStatus === 'idle' && usersStatus === 'idle') {
            dispatch(fetchSubredditPosts({
                subreddit: undefined,
            }))

            dispatch(fetchSubreddits());
            dispatch(fetchUsers());
        }
    }, [ subredditPostsStatus, subredditsStatus, fetchSubreddits, usersStatus, dispatch ]);

    let cardContent;
    if (subredditPostsStatus === 'pending') {
        cardContent = <CircularProgress size='3rem' sx={{ margin: 'auto' }} />;
    } else if (subredditPostsStatus === 'fulfilled' && subredditsStatus === 'fulfilled' && usersStatus === 'fulfilled') {
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
            <SubredditNav subreddits={subreddits} users={users} />
        </div>
    );
}

export default Main;