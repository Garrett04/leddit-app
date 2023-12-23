import { NavLink, useNavigate } from "react-router-dom";
import TimeAgo from "./TimeAgo";
import Markdown from "react-markdown";


const Comments = ({id, comments}) => {
    const navigate = useNavigate();
    const noComments = !comments[id] || comments[id].length === 0; // To check if the comments fetched is an empty object

    const handleClick = () => {
      navigate("..", { relative: 'path' })
    }

    const renderComments = () => {
        // console.log(comments);
        // console.log(comments[id][0].body);
        if (noComments) {
          return (
            <p className='noComments'>
              No comments
            </p>
          );
        }
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
                            <Markdown>
                                {body}
                            </Markdown>
                            <br/>
                            <NavLink to={`u/${author}`} onClick={handleClick}>
                                <p>~ u/{author}</p>
                            </NavLink>
                            <TimeAgo timestamp={created} />
                        </blockquote>
                    </div>
                );
            }
            return null;         
        })
    }

    return (
        <div className={!noComments ? 'commentsSection' : null}>
            {renderComments()}
        </div>
    )
}

export default Comments;