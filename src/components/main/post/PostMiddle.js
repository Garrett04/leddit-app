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

        if (!is_video) {
            if (body && !body.match(/jpg|gif/)) {
                return MarkdownToJSX(body);
            }
            if (url.match(/gallery/)) {
                return (
                    <>

                    </>
                );
            }
            if (!url.match(/\.(jpg|jpeg|png|gif|bmp|svg)$/i)) {
                return (
                    <>
                        <a href={url} target='_blank'>{url}</a>
                        <a href={url} target='_blank'>
                            <img src={thumbnail} alt={title} />
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