const PostTop = ({likeCount, title}) => {
    return (
        <div className="top">
                <div className="like-dislike">
                    <div className="like-arrow">
                        <div className="line"></div>
                    </div>
                    <p className="like-count">{likeCount}</p>
                    <div className="dislike-arrow">
                        <div className="line"></div>
                    </div>
                </div>
                <h2 className="title">{title}</h2>
        </div>
    );
}

export default PostTop;