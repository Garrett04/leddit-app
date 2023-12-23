import './SubredditNav.css';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { 
    getSubredditsError, 
    getSubredditsStatus 
} from '../../../features/subreddits/subredditsSlice';
import { 
  getUsersStatus, 
} from '../../../features/users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../../utilities/formatNumber';

const SubredditNav = ({subreddits, users}) => {
    const subredditsStatus = useSelector(getSubredditsStatus);
    const subredditsError = useSelector(getSubredditsError);
    
    const usersStatus = useSelector(getUsersStatus);
    
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
            id,
            subscribers
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
                        <p>
                          r/{display_name}<br/>
                          Subsribers: {formatNumber(subscribers)}
                        </p>
                    </NavLink>
                )
            }
            return null;
         //console.log(subreddit.icon_img)
        })
    )
    
    const renderUserCards = () => (
      users.map(({
        display_name_prefixed,
        id,
        icon_img,
        over18,
      }) => {
        if (!over18 && !icon_img.match(/styles/)) {
          return (
            <NavLink
              key={id}
              className='subredditNavCard'
              to={`${display_name_prefixed}`}
              onClick={handleClick}
            >
              <img 
                className='subredditImage'
                src={icon_img}
                alt={`An icon of ${display_name_prefixed}`}
              />
              <p>
                {display_name_prefixed}
              </p>
            </NavLink>
          )
        }
        return null;
      })
    )

    return (
        <aside>
            {subredditsStatus === 'fulfilled' ? <h2>Subreddits</h2> : null}
            {renderSubredditCards()}
            
            {usersStatus === 'fulfilled' ? <h2>Users</h2> : null}
            {renderUserCards()}
        </aside>
    )
}

export default SubredditNav;