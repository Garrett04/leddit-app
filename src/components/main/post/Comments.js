

const Comments = ({id, comments}) => {
    const noComments = !comments[id] || comments[id].length === 0;

    const renderComments = () => {
        console.log(comments);
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
                            <p>
                                {body}
                            </p>
                            <br/>
                            <p>~ u/{author}</p>
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