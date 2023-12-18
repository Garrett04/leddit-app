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
    }) => {
      if (display_name === subreddit) {
        return (
          <img src={banner_img} />
        )
      }
    })
  )

  console.log(subredditPosts);
  console.log(subreddits);

  return (
    <>
      {renderSubreddit()}
      <h1>Hello World</h1>
      <Main subreddit={subreddit} />
    </>
  );
}

export default Subreddit;