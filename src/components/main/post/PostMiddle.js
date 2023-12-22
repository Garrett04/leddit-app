import React from 'react'
import { marked } from 'marked';
import ReactPlayer from 'react-player';


const PostMiddle = ({url, is_video, media, body, thumbnail, domain, title}) => {
    const MarkdownToJSX = (markdown) => {
        const htmlContent = marked(markdown);

        return (
            <div className='body-container' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        );
    }

    const renderPreview = () => {
        let video;

        // console.log(media, domain, !is_video, url);
        if (!body && url.match(/\/comments\/([a-zA-Z0-9]+)\//)) { // Render comments section
            return null;
        }

        if (!is_video) {
            if (body && !body.match(/jpg|gif/)) {
                return MarkdownToJSX(body);
            }
            if (!url.match(/\.(jpg|jpeg|png|gif|bmp|svg|)$/i)) {
                return (
                    <a className='linkPage' href={url} target='_blank'>
                        {url}
                        {thumbnail && !(thumbnail === 'default') 
                        ? <img className='thumbnail' src={thumbnail} alt={title} /> 
                        : null}
                    </a>
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
            return video;
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