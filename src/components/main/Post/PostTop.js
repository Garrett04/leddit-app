import arrowIcon from '../../../assets/images/arrow-icon.svg';

const PostTop = ({likeCount, title, id, handleLikeCount, subreddit}) => {
    return (
        <div className="top">
                <div className="like-dislike">
                    <button className="likeBtn" onClick={(e) => handleLikeCount(e ,id)}>
                        <img className="like-arrow" src={arrowIcon} alt='like button' />
                    </button>
                    <p className="like-count">
                        {likeCount > 1000 ? `${(likeCount / 1000).toFixed(1)}k` : `${likeCount}`}
                    </p>
                    <button className="likeBtn" onClick={(e) => handleLikeCount(e, id)}>
                        <img className="dislike-arrow" src={arrowIcon} alt='dislike button' />
                    </button>
                </div>
                <h2 className="title">{title}</h2>
                <a href={`https://www.reddit.com/r/${subreddit}`} target="_blank">
                    <p>r/{subreddit}</p>
                </a>
        </div>
    );
}

export default PostTop;