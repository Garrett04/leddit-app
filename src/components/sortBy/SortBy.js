import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { fetchSubredditPosts } from "../../data/redditData";
import { useDispatch } from "react-redux";

const SortBy = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { subreddit } = useParams();
    const [ searchParams ] = useSearchParams();
    const sort = searchParams.get('sort');

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
        <select 
            id='sort-options' 
            className='sort-options' 
            onChange={handleChange} 
            aria-label="Sort Options Dropdown"
            defaultValue={sort}
        >
            <option value='hot'>Hot</option>
            <option value='new'>New</option>
            <option value='top'>Top</option>
            <option value='rising'>Rising</option>
        </select>
    )
}

export default SortBy;