import './SubredditNav.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchSubredditData } from '../../../data/redditData';
import { selectAllData } from "../../../features/subredditPosts/subredditPostsSlice";
import { NavLink } from "react-router-dom";

const SubredditNav = () => {
    const dispatch = useDispatch();
    const subreddit = useSelector(selectAllData);

    const renderSubredditCards = subreddit.map((subreddit) => (
        // <NavLink className='subredditNavCard' to={`r/${subreddit}`}>
        //     <img src={subreddit.header_img} />
        //     r/{subreddit}
        // </NavLink>
        console.log(subreddit)
    ))

    return (
        <>
            {renderSubredditCards}
        </>
    )
}

export default SubredditNav;