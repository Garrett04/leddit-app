import { useSelector, useDispatch } from 'react-redux';
import { selectAllComments } from '../../../features/posts/postsSlice';
import { fetchComments } from '../../../data/redditData';


const Comments = ({permalink}) => {
    const dispatch = useDispatch();

    const allComments = useSelector(selectAllComments);
    
    console.log(permalink);
    
    if (permalink) {
        dispatch(fetchComments(permalink));
    }

    const renderComments = () => {
        return allComments.map(({
            body,
            id,
            author,
            created,
        }) => {
            // console.log(body);
            if (body) {
                return (
                    <div key={id}>
                        <blockquote>
                            <p>
                                {body}
                            </p>
                            <br/>
                            <p>~ u/{author}</p>
                        </blockquote>
                    </div>
                );
            }
        }) 
    }

    return (
        <div className='commentsSection'>
            {renderComments()}
        </div>
    )
}

export default Comments;