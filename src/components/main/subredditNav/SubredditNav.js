import './SubredditNav.css';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { 
    getSubredditsError, 
    getSubredditsStatus 
} from '../../../features/subreddits/subredditsSlice';
import { 
  getUsersStatus, 
  getUsersError,
} from '../../../features/users/usersSlice';
import { useNavigate } from 'react-router-dom';

const SubredditNav = ({subreddits, users}) => {
    const subredditsStatus = useSelector(getSubredditsStatus);
    const subredditsError = useSelector(getSubredditsError);
    
    const usersStatus = useSelector(getUsersStatus);
    const usersError = useSelector(getUsersError);
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("..", { relative: 'path' });
    }

    if (subredditsStatus === 'rejected') {
        return <p>{subredditsError}</p>;
    }

    const renderSubredditCards = () => (
        subreddits.map(({
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
                        <p>r/{display_name}</p>
                    </NavLink>
                )
            }
         //console.log(subreddit.icon_img)
        })
    )
    
    const renderUserCards = () => (
      users.map(({
        display_name,
        title,
        id,
        icon_img,
      }) => {
        return (
          <NavLink
            key={id}
            className='subredditNavCard'
            to={`u/${display_name}`}
            onClick={handleClick}
          >
            <img 
              className='subredditImage'
              src={icon_img}
              alt={`an icon of ${display_name} user`}
            />
            <p>u/{display_name}</p>
          </NavLink>
        )
      })
    )

    return (
        <aside>
            {renderSubredditCards()}
            {renderUserCards()}
        </aside>
    )
}

export default SubredditNav;