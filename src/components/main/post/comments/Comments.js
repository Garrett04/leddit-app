import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../../../../data/redditData';


const Comments = ({comments}) => {
    const dispatch = useDispatch();

    const renderComments = () => {
        return comments.map(({
            body,
            id,
            author,
            created
        }) => {
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