import TimeAgo from "./TimeAgo";

import commentIcon from '../../../assets/images/comment-icon.svg'

import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import Comments from "./Comments";

const PostBottom = ({user, timestamp, commentCount, permalink}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("..", { relative: 'path' });
    }

    const handleCommentSection = () => {
        // console.log(permalink)
        console.log(permalink);
    }

    const showCommentSection = () => {
        return (
            <Comments permalink={permalink} />
        )
    }

    return (
        <div className="postBottom">
            <div className="user">
                <p>Posted by:</p>
                <Link to={`u/${user}`} onClick={handleClick}>
                    u/{user}
                </Link>
            </div>
            <TimeAgo timestamp={timestamp} />
            <button 
                className="commentIcon"
                onClick={handleCommentSection}
            >
                <img src={commentIcon} alt='comment icon' />
                <p>{commentCount}</p>
            </button>
            {showCommentSection}
        </div>
    );
}

export default PostBottom;