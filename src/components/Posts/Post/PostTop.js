const PostTop = ({likeCount, title, id, handleLikeCount}) => {
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
        </div>
    );
}

export default PostTop;