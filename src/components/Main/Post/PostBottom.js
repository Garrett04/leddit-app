import TimeAgo from "./TimeAgo";

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
                <img src='./images/comment-icon.svg'/>
                <p>{commentCount}</p>
            </div>
        </div>
    );
}

export default PostBottom;