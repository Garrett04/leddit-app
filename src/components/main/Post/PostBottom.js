import TimeAgo from "./TimeAgo";

import commentIcon from '../../../assets/images/comment-icon.svg'

const PostBottom = ({user, timestamp, commentCount}) => {
    return (
        <div className="postBottom">
            <div className="user">
                <p>Posted by:</p>
                <a href={`https://www.reddit.com/user/${user}`} target="_blank">
                    u/{user}
                </a>
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