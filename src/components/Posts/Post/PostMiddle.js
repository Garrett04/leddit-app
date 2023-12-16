import React from 'react'


const PostMiddle = ({url, is_video, media, selftext}) => {
    const renderPreview = () => {
        if (!is_video) {
            return <img src={url}/>
        } else {
            return (
                <video controls>
                    <source src={media.reddit_video.fallback_url}/>
                </video>
            );
        }
    }

    return (
        <>
            <div className='media-container'>
                {renderPreview()}
            </div>
            <div className='body-container' dangerouslySetInnerHTML={{ __html: selftext }}/>
        </>
    )
}

export default PostMiddle