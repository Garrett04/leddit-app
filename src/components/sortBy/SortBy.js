import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { fetchSubredditPosts } from "../../data/redditData";
import { useDispatch } from "react-redux";

const SortBy = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { subreddit } = useParams();
    const [ searchParams ] = useSearchParams();
    const sort = searchParams.get('sort');
    
    const toTitleCase = (str) => {
      const firstLetter = str.charAt(0).toUpperCase();
      const restOfStr = str.slice(1);
      return firstLetter + restOfStr;
    }

    const handleChange = ({target}) => {
        navigate(`?sort=${target.value}`);
        if (target.value && subreddit) {
            // console.log(target.value)
            dispatch(fetchSubredditPosts({
                subreddit: subreddit,
                sort: target.value,
            }));
            
        } else if (target.value) {
            dispatch(fetchSubredditPosts({
                subreddit: undefined,
                sort: target.value,
            }))
        }
    }
    
    
    return (
        <select id='sort-options' className='sort-options' onChange={handleChange} aria-label="Sort Options Dropdown">
            {sort 
            ? <option value='none' selected disabled hidden>{toTitleCase(sort)}</option>
            : <option value='none' selected disabled>Sort By</option>}
            <option value='hot' selected>Hot</option>
            <option value='new'>New</option>
            <option value='top'>Top</option>
            <option value='rising'>Rising</option>
        </select>
    )
}

export default SortBy;