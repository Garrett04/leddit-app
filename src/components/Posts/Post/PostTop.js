const PostTop = ({likeCount, title, id, handleLikeCount}) => {
    return (
        <div className="top">
                <div className="like-dislike">
                    <button className="likeBtn" onClick={(e) => handleLikeCount(e ,id)}>
                        <div className="like-arrow">
                            <div className="line"></div>
                        </div>
                    </button>
                    <p className="like-count">{likeCount}</p>
                    <button className="likeBtn" onClick={(e) => handleLikeCount(e, id)}>
                        <div className="dislike-arrow">
                            <div className="line"></div>
                        </div>
                    </button>
                </div>
                <h2 className="title">{title}</h2>
        </div>
    );
}

export default PostTop;