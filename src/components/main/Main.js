import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getPostsError, 
    getPostsStatus, 
    selectAllComments, 
    selectAllPosts,
} from "../../features/posts/postsSlice";

import { 
  fetchSubreddits, 
  fetchPosts,
  fetchUsers,
  fetchComments,
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
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    const subreddits = useSelector(selectAllSubreddits);
    const subredditsStatus = useSelector(getSubredditsStatus);
    
    const users = useSelector(selectAllUsers);
    const usersStatus = useSelector(getUsersStatus);
    
    const [ searchParams ] = useSearchParams();
    const sort = searchParams.get('sort');

    // console.log(user);

    console.log(posts);

    useEffect(() => {
        if (subreddit || sort) {
            dispatch(fetchPosts({
                subreddit: subreddit,
                sort: sort,
            }));
        }

        if (user || sort) {
            console.log(user);
            dispatch(fetchPosts({
                subreddit: undefined,
                sort: sort,
                user: user,
            }))
        }
    }, [ subreddit, user ]);

    useEffect(() => {
        if (postsStatus === 'idle' && subredditsStatus === 'idle' && usersStatus === 'idle') {
            dispatch(fetchPosts({
                subreddit: undefined,
            }))

            dispatch(fetchSubreddits());
            dispatch(fetchUsers());
        }
    }, [ postsStatus, subredditsStatus, fetchSubreddits, usersStatus, dispatch ]);

    let cardContent;
    if (postsStatus === 'pending') {
        cardContent = <CircularProgress size='3rem' sx={{ margin: 'auto' }} />;
    } else if (postsStatus === 'fulfilled' && subredditsStatus === 'fulfilled' && usersStatus === 'fulfilled') {
        cardContent = posts.map(post => {
            if (!post.over_18) {
                // console.log(posts);
                return <Post key={post.id} post={post} />
            }
        })
    } else if (postsStatus === 'rejected') {
        cardContent = <p>{error}</p>;
    }

    const term = searchParams.get('term');
    
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