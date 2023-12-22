import TimeAgo from "./TimeAgo";

import commentIcon from '../../../assets/images/comment-icon.svg'

import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

const PostBottom = ({user, timestamp, commentCount}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("..", { relative: 'path' });
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
            <div className="commentSection">
                <img src={commentIcon} alt='comment icon' />
                <p>{commentCount}</p>
            </div>
        </div>
    );
}

export default PostBottom;