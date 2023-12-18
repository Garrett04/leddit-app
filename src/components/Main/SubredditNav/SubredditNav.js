import './SubredditNav.css';
import { NavLink } from "react-router-dom";

const SubredditNav = ({subreddits}) => {

    const renderSubredditCards = () => (
        subreddits.map(({
            icon_img, 
            over18,
            url,
            display_name,
        }) => {
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
            
         //console.log(subreddit.icon_img)
        })
    )

    return (
        <>
            {renderSubredditCards()}
        </>
    )
}

export default SubredditNav;