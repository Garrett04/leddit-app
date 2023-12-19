import arrowIcon from '../../../assets/images/arrow-icon.svg';
import { NavLink, useNavigate } from 'react-router-dom';

const PostTop = ({likeCount, title, id, handleLikeCount, subreddit}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('..', { relative: 'path' });
    }

    return (
        <div className="top">
                <div className="like-dislike">
                    <button className="likeBtn" onClick={(e) => handleLikeCount(e ,id)}>
                        <img className="like-arrow" src={arrowIcon} alt='like button' />
                    </button>
                    <p className="like-count">
                        {likeCount > 1000 ? `${(likeCount / 1000).toFixed(1)}k` : `${likeCount}`}
                    </p>
                    <button className="likeBtn" onClick={(e) => handleLikeCount(e, id)}>
                        <img className="dislike-arrow" src={arrowIcon} alt='dislike button' />
                    </button>
                </div>
                <h2 className="title">{title}</h2>
                <NavLink to={`r/${subreddit}`} onClick={handleClick}>
                    <p>r/{subreddit}</p>
                </NavLink>
        </div>
    );
}

export default PostTop;