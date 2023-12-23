import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getPostsError, 
    getPostsStatus, 
    selectAllPosts,
} from "../../features/posts/postsSlice";

import { 
  fetchSubreddits, 
  fetchPosts,
  fetchUsers,
  fetchDataBySearchTerm,
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

    const searchTerm = searchParams.get('term');

    // console.log(searchTerm);

    // console.log(user);

    // console.log(posts);

    useEffect(() => {
        if ((subreddit || sort) && !(user || sort)) { // To render when the path is like this r/:subreddit
            console.log('hello', subreddit, sort);
            dispatch(fetchPosts({ subreddit, sort }));

        } else if ((user || sort) && !(subreddit || sort)) { // To render when the path is like this u/:user
            console.log('hello1', user, sort);
            dispatch(fetchPosts({ subreddits: undefined, user, sort }));

        } else if ((subreddit && sort)) { // To render when the path is something like this r/:subreddit?sort=top
            console.log('hello2', subreddit, sort);
            dispatch(fetchPosts({ subreddit, sort }));

        } else if (!searchTerm && sort) { // To render when the path is something like this u/:user?sort=top
            console.log('hello3', user, sort);
            dispatch(fetchPosts({ user, sort }));
        }
    }, [subreddit, user, searchTerm, sort, dispatch]);

    useEffect(() => {
        if (searchTerm && sort) {
            dispatch(fetchDataBySearchTerm({ term: searchTerm, sort }));
        } else if (searchTerm) {
            dispatch(fetchDataBySearchTerm({ term: searchTerm, sort: 'relevance' }));
        }
    }, [searchTerm, sort, dispatch]);

    useEffect(() => {
        if (postsStatus === 'idle' && subredditsStatus === 'idle' && usersStatus === 'idle') {
            dispatch(fetchPosts({
                subreddit: undefined,
            }))

            dispatch(fetchSubreddits());
            dispatch(fetchUsers());
        }
    }, [ postsStatus, subredditsStatus, usersStatus, dispatch ]);

    

    let cardContent;
    if (postsStatus === 'pending') {
        cardContent = <CircularProgress size='3rem' sx={{ margin: 'auto' }} />;
    } else if (postsStatus === 'fulfilled' && subredditsStatus === 'fulfilled' && usersStatus === 'fulfilled') {
        cardContent = posts.map(post => {
            if (!post.over_18) {
                // console.log(post.id)
                return <Post key={post.id} post={post} />
            }
            return null;
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