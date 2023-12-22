import { useParams, useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import { fetchDataBySearchTerm, fetchPosts } from "../../data/redditData";
import { useDispatch, useSelector } from "react-redux";
import { getPostsStatus } from "../../features/posts/postsSlice";

const SortBy = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { subreddit } = useParams();
    const [ searchParams ] = useSearchParams();
    const sort = searchParams.get('sort');
    const searchTerm = searchParams.get('term');
    const postsStatus = useSelector(getPostsStatus);
    const { user } = useParams();

    const handleChange = ({target}) => {
        navigate(`?sort=${target.value}`);
        
        if (target.value && subreddit) {
            // console.log(target.value)
            dispatch(fetchPosts({
                subreddit: subreddit,
                sort: target.value,
            }));
            
        } else if (target.value && searchTerm) {
            dispatch(fetchDataBySearchTerm({
                term: searchTerm,
                sort: target.value,
            }));

            // To navigate to a search with two queries
            const searchQuery = {
                term: searchTerm,
                sort: target.value,
            }

            const query = createSearchParams(searchQuery);

            navigate({
                pathname: `/search`,
                search: `?${query}`
            });

        } else if (target.value && user) {
            dispatch(fetchPosts({
                subreddit: undefined,
                sort: target.value,
                user: user,
            }))

        } else if (target.value) {
            dispatch(fetchPosts({
                subreddit: undefined,
                sort: target.value,
            }));
        }
    }

    const renderSortOptions = () => {
        if (searchTerm) {
            return (
                <>
                    <option value="relevance">Relevance</option>
                    <option value="hot">Hot</option>
                    <option value="top">Top</option>
                    <option value="new">New</option>
                    <option value="comments">Most Comments</option>
                </>
            );
        } else if (user) {
            return (
                <>
                    <option value='hot'>Hot</option>
                    <option value='new'>New</option>
                    <option value='top'>Top</option>
                </>
            )
        } else {
            return (
                <>
                    <option value='hot'>Hot</option>
                    <option value='new'>New</option>
                    <option value='top'>Top</option>
                    <option value='rising'>Rising</option>
                </>
            );
        }
    }
    
    return (
        <select 
            id='sort-options' 
            className='sort-options' 
            onChange={handleChange} 
            aria-label="Sort Options Dropdown"
            defaultValue={sort}
            disabled={!(postsStatus === 'fulfilled')}
        >
            {renderSortOptions()}
        </select>
    )
}

export default SortBy;