import TimeAgo from "./TimeAgo";

import commentIcon from '../../../assets/images/comment-icon.svg'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import Comments from "./comments/Comments";
import { fetchComments } from "../../../data/redditData";
import { getPostsStatus } from "../../../features/posts/postsSlice";
import { 
    getCommentsError, 
    getCommentsStatus, 
    selectAllComments 
} from "../../../features/posts/commentsSlice";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const PostBottom = ({user, timestamp, commentCount, id, permalink, showComments, handleShowComments}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postsStatus = useSelector(getPostsStatus);

    const comments = useSelector(selectAllComments);
    const commentsStatus = useSelector(getCommentsStatus);
    const commentsError = useSelector(getCommentsError);
    let commentsContent;

    const handleClick = () => {
        navigate("..", { relative: 'path' });
    }

    const handleCommentSection = () => {
        if (postsStatus === 'fulfilled' && !showComments) {
          // console.log(permalink); permalink consists of an id which the same as the post id.
            handleShowComments();
            console.log(permalink)
            dispatch(fetchComments(permalink));
            
        } else {
          handleShowComments();
        }
    }

    if (commentsStatus === 'pending') {
        commentsContent = <CircularProgress />
    } else if (commentsStatus === 'fulfilled') {
        commentsContent = <Comments id={id} comments={comments} />
    }

    return (
        <>
            <div className="postBottom">
                <div className="user">
                    <p>Posted by:</p>
                    <Link to={`u/${user}`} onClick={handleClick}>
                        u/{user}
                    </Link>
                </div>
                <TimeAgo timestamp={timestamp} />
                <button 
                    className="commentsSectionBtn"
                    onClick={handleCommentSection}
                >
                    <img src={commentIcon} alt='comment icon' />
                    <p>{commentCount}</p>
                </button>
            </div>
            {showComments ? commentsContent : null}
        </>
    );
}

export default PostBottom;