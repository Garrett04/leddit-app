import React from 'react'
import { marked } from 'marked';
import ReactPlayer from 'react-player';
import Markdown from 'react-markdown';


const PostMiddle = ({url, is_video, media, selftext, thumbnail, domain, title}) => {
    
    const MarkdownToJSX = (markdown) => {
        const htmlContent = marked(markdown);

        return (
            <div className='body-container' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        );
    }

    const renderPreview = () => {
        let video;

        if (!is_video) {
            if (selftext) {
                return MarkdownToJSX(selftext);
            }
            if (!url.match(/\.(jpg|jpeg|png|gif|bmp|svg)$/i)) {
                return (
                    <>
                        <a className='linkPage' href={url} target='_blank'>{url}</a>
                        <a href={url} target='_blank'>
                            <img className='thumbnail' src={thumbnail} alt={title} />
                        </a>
                    </>
                );
            }
            return <img src={url} alt={title} />
        } else {
            if (media) {
                if (media.reddit_video) {
                    video = 
                    <video controls>
                        <source src={media.reddit_video.fallback_url}/>
                    </video>
                } else if (domain.match(/yout/)) {
                    video = 
                    <ReactPlayer url={url} controls />
                } else if (domain.match(/vimeo/)) {
                    video = 
                    <ReactPlayer url={url} controls />
                }    
            }
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