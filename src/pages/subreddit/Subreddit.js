import './Subreddit.css';
import { useSelector } from "react-redux";
import { selectAllSubreddits } from "../../features/subredditData/subredditsSlice";
import { useParams } from "react-router-dom";
import { selectAllSubredditPosts } from "../../features/subredditPosts/subredditPostsSlice";
import Main from "../../components/main/Main";


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
    }) => {
      if (display_name === subreddit) {
        return (
          <div 
            key={id} 
            className="subredditHeading"
          >
              <img src={banner_img} />
              <h2>r/{display_name}</h2>
          </div>
        )
      }
    })
  )

  console.log(subredditPosts);
  console.log(subreddits);

  return (
    <>
      {renderSubreddit()}
      <Main subreddit={subreddit} />
    </>
  );
}

export default Subreddit;