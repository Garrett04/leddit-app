import { useParams } from "react-router-dom";
import { fetchSubredditPosts } from "../../data/redditData";
import { useDispatch } from "react-redux"

const SortBy = () => {
    const dispatch = useDispatch();

    const { subreddit } = useParams();

    const handleChange = ({target}) => {
        if (target.value && subreddit) {
            console.log(target.value)
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
        <select onChange={handleChange} aria-label="Sort Options Dropdown">
            <option value='hot'>Hot</option>
            <option value='new'>New</option>
            <option value='top'>Top</option>
            <option value='rising'>Rising</option>
        </select>
    )
}

export default SortBy;