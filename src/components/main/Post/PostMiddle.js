import React from 'react'
import { marked } from 'marked';


const PostMiddle = ({url, is_video, media, selftext, thumbnail}) => {
    const MarkdownToJSX = (markdown) => {
        const htmlContent = marked(markdown);

        return (
            <div className='body-container' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        );
    }

    const renderPreview = () => {
        if (!is_video) {
            if (selftext) {
                return MarkdownToJSX(selftext);
            }
            if (!url.match(/\.(jpg|jpeg|png|gif|bmp|svg)$/i)) {
                return (
                    <>
                        <a className='linkPage' href={url} target="_blank">{url}</a>
                        <a href={url} target="_blank">
                            <img className='thumbnail' src={thumbnail} />
                        </a>                    
                    </>
                )
            }
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
            <div className='middle-container'>
                {renderPreview()}
            </div>
        </>
    )
}

export default PostMiddle