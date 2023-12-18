import { fetchSubredditPosts } from "../../data/redditData";
import { useDispatch } from "react-redux"

const SortBy = () => {
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        if (target) {
            console.log(target.value)
            dispatch(fetchSubredditPosts({
                subreddit: undefined,
                sort: target.value,
            }));
        }
    }

    return (
        <select onChange={handleChange}>
            <option value='hot'>Hot</option>
            <option value='new'>New</option>
            <option value='top'>Top</option>
            <option value='rising'>Rising</option>
        </select>
    )
}

export default SortBy;