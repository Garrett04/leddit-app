const PostTop = ({likeCount, title, id, handleLikeCount, subreddit}) => {
    return (
        <div className="top">
                <div className="like-dislike">
                    <button className="likeBtn" onClick={(e) => handleLikeCount(e ,id)}>
                        <img className="like-arrow" src='./images/arrow-icon.svg'/>
                    </button>
                    <p className="like-count">{`${likeCount}k`}</p>
                    <button className="likeBtn" onClick={(e) => handleLikeCount(e, id)}>
                        <img className="dislike-arrow" src='./images/arrow-icon.svg'/>
                    </button>
                </div>
                <h2 className="title">{title}</h2>
                <p>{subreddit}</p>
        </div>
    );
}

export default PostTop;