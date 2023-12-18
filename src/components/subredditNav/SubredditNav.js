import { useEffect } from 'react';
import './SubredditNav.css';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSubredditPostsStatus } from '../../features/subredditPosts/subredditPostsSlice';
import { getSubredditsError, getSubredditsStatus, selectAllSubreddits } from '../../features/subredditData/subredditsSlice';
import { fetchSubredditData } from '../../data/redditData';

const SubredditNav = ({subreddit}) => {
    const dispatch = useDispatch();
    const subredditPostsStatus = useSelector(getSubredditPostsStatus);

    const subreddits = useSelector(selectAllSubreddits);
    const subredditsStatus = useSelector(getSubredditsStatus);
    const subredditsError = useSelector(getSubredditsError);

    useEffect(() => {
        if (subredditPostsStatus === 'fulfilled' && subredditsStatus === 'idle') {
            dispatch(fetchSubredditData())
        }
    }, [ subredditPostsStatus, subredditsStatus, dispatch ]);

    let subredditNavCards;
    if (subredditsStatus === 'pending') {
        subredditNavCards = <p>Loading...</p>; // Add a loading component later. Prolly from material ui.
    } else if (subredditsStatus === 'fulfilled') {
        subredditNavCards = subreddits.map(subreddit => {
            const { icon_img, display_name, over18 } = subreddit;
            if (icon_img && !over18) {
                // console.log(icon_img);
                // console.log(over18);
                // console.log(url)
                return (
                    <NavLink className='subredditNavCard' to={`r/${display_name}`}>
                        <img className='subredditImage' src={icon_img} />
                        r/{display_name}
                    </NavLink>
                )
            }  
        })
    } else if (subredditsStatus === 'rejected') {
        subredditNavCards = <p>{subredditsError}</p>;
    }

    return (
        <aside>
            {subredditNavCards}
        </aside>
    )
}

export default SubredditNav;