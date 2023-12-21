import { useState } from "react";
import { fetchDataBySearchTerm } from "../../data/redditData";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ term, setTerm ] = useState('');
    const [ searchParams ] = useSearchParams();
    const sort = searchParams.get('sort'); 
    const searchTerm = searchParams.get('term');


    const handleChange = ({target}) => {
        setTerm(target.value);
    }

    const handleSearchTerm = (e) => {
        let searchQuery;
        if (e.key === 'Enter') {
            setTerm(term.toLowerCase());
            // console.log('enter')
            if (sort && searchTerm) {
                dispatch(fetchDataBySearchTerm({ term: term, sort: sort }));

                searchQuery = {
                    term: term,
                    sort: sort,
                }
            } else if (term.length > 1) {
                dispatch(fetchDataBySearchTerm({term: term, sort: 'relevance'}));

                searchQuery = {
                    term: term,
                }
            }

            if (term) {
                const query = createSearchParams(searchQuery);
    
                navigate({
                    pathname: `/search`,
                    search: `?${query}`
                });
            }

            setTerm('');
        }
    }

    return (
        <>
            <input 
                type='text'
                id='term'
                value={term}
                placeholder="Search Leddit"
                onChange={handleChange}
                onKeyDown={handleSearchTerm}
            />
        </>
    );
}

export default SearchBar;