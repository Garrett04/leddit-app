import TimeAgo from "./TimeAgo";

const PostBottom = ({user, timestamp, commentCount}) => {
    return (
        <div className="postBottom">
            <a href={`https://www.reddit.com/user/${user}`} target="_blank">{user}</a>
            <TimeAgo timestamp={timestamp} />
            <div className="commentSection">
                <img src='./images/comment-icon.svg'/>
                <p>{commentCount}</p>
            </div>
        </div>
    );
}

export default PostBottom;