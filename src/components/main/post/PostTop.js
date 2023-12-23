import arrowIcon from '../../../assets/images/arrow-icon.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { formatNumber } from '../../../utilities/formatNumber';

const PostTop = ({likeCount, title, subreddit}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('..', { relative: 'path' });
    }

    return (
        <div className="top">
                <div className="like-dislike">
                    <button className="likeBtn">
                        <img className="like-arrow" src={arrowIcon} alt='like button' />
                    </button>
                    <p className="like-count">
                        {formatNumber(likeCount)}
                    </p>
                    <button className="likeBtn">
                        <img className="dislike-arrow" src={arrowIcon} alt='dislike button' />
                    </button>
                </div>
                <Markdown 
                    className="title"
                >
                    {title.split(' ').length > 12 ? `${title.substring(0, 35)}...` : title}
                </Markdown>
                <NavLink className='subredditLink' to={`r/${subreddit}`} onClick={handleClick}>
                    <p>r/{subreddit}</p>
                </NavLink>
        </div>
    );
}

export default PostTop;