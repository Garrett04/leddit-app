import './Subreddit.css';
import { useSelector } from "react-redux";
import { selectAllSubreddits } from "../../features/subredditData/subredditsSlice";
import { useParams } from "react-router-dom";
import { selectAllSubredditPosts } from "../../features/subredditPosts/subredditPostsSlice";
import Main from "../../components/main/Main";
import Markdown from 'react-markdown';


const Subreddit = () => {
  const subredditPosts = useSelector(selectAllSubredditPosts);
  const subreddits = useSelector(selectAllSubreddits);

  const { subreddit } = useParams();

  // console.log(subreddit);

  const renderSubreddit = () => (
    subreddits.map(({
      banner_img,
      display_name,
      id,
      title,
    }) => {
      if (display_name === subreddit) {
        return (
          <div 
            key={id} 
            className="subredditHeading"
          >
              {banner_img ? <img src={banner_img}/> : null}
              <h2>r/{display_name}</h2>
              <Markdown>{title}</Markdown>
          </div>
        )
      }
    })
  )

  // console.log(subredditPosts);
  // console.log(subreddits);

  return (
    <>
      {renderSubreddit()}
      <Main subreddit={subreddit} />
    </>
  );
}

export default Subreddit;