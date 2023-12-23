import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../../../../data/redditData';


const Comments = ({id, comments}) => {
    const dispatch = useDispatch();

    const renderComments = () => {
      console.log(comments);
      // console.log(comments[id][0].body);
        return Object.values(comments[id]).map(({
            body,
            id,
            author,
            created
        }) => {
            if (body) {
              //console.log(id);
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