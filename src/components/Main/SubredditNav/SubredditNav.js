import './SubredditNav.css';
import { NavLink } from "react-router-dom";

const SubredditNav = ({subreddit}) => {

    const renderSubredditCards = () => {
        const { icon_img, display_name } = subreddit;
        if (icon_img) {
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
        //console.log(subreddit.icon_img)
    }

    return (
        <>
            {renderSubredditCards()}
        </>
    )
}

export default SubredditNav;