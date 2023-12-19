import './SubredditNav.css';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { 
    getSubredditsError, 
    getSubredditsStatus 
} from '../../features/subredditData/subredditsSlice';
import { useNavigate } from 'react-router-dom';

const SubredditNav = ({subreddit}) => {
    const subredditsStatus = useSelector(getSubredditsStatus);
    const subredditsError = useSelector(getSubredditsError);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("..", { relative: 'path' });
    }

    if (subredditsStatus === 'rejected') {
        return <p>{subredditsError}</p>;
    }

    const renderSubredditCards = () => (
        subreddit.map(({
            icon_img, 
            over18,
            display_name,
            id
        }) => {
            if (icon_img && !over18) {
                // console.log(icon_img);
                // console.log(over18);
                // console.log(url)
                return (
                    <NavLink 
                        key={id}
                        className='subredditNavCard' 
                        to={`r/${display_name}`}
                        onClick={handleClick} // might change
                    >
                        <img 
                            className='subredditImage' 
                            src={icon_img} 
                            alt={`An icon of ${display_name} subreddit`} />
                        r/{display_name}
                    </NavLink>
                )
            }
         //console.log(subreddit.icon_img)
        })
    )

    return (
        <aside>
            {renderSubredditCards()}
        </aside>
    )
}

export default SubredditNav;