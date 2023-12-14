const PostBottom = ({user, timestamp, commentCount}) => {
    return (
        <div className="postBottom">
            <p>{`Posted by ${user}`}</p>
            <p>{`${timestamp} ago`}</p>
            <div className="commentSection">
                <img src='./images/comment-icon.svg'/>
                <p>{commentCount}</p>
            </div>
        </div>
    );
}

export default PostBottom;