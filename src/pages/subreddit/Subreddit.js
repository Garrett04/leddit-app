import './Subreddit.css';
import { useSelector } from "react-redux";
import { selectAllSubreddits } from "../../features/subreddits/subredditsSlice";
import { useParams } from "react-router-dom";
import Main from "../../components/main/Main";
import Markdown from 'react-markdown';


const Subreddit = () => {
  const subreddits = useSelector(selectAllSubreddits);

  const { subreddit } = useParams();

  // console.log(subreddit);

  const renderSubreddit = () => {
    const foundSubreddit = subreddits.find((subredditName) => subredditName.display_name === subreddit);

    if (foundSubreddit) {
      const { banner_img, display_name, id, title } = foundSubreddit;
      return (
        <div 
          key={id} 
          className="subredditHeading"
        >
            {banner_img ? <img src={banner_img} alt={`a banner of ${display_name}`} /> : null}
            <h2>r/{display_name}</h2>
            <Markdown>{title}</Markdown>
        </div>
      );
    } else {
      return (
        <div
          className='subredditHeading'
        >
          <h2>r/{subreddit}</h2>
        </div>
      );
    }
  }

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