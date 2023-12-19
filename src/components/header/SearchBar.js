import { useState } from "react";
import { fetchDataBySearchTerm } from "../../data/redditData";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ term, setTerm ] = useState('');


    const handleChange = ({target}) => {
        setTerm(target.value);
    }

    const handleSearchTerm = (e) => {
        if (e.key === 'Enter') {
            setTerm(term.toLowerCase());
            // console.log('enter')
            if (term.length > 1) {
                
                dispatch(fetchDataBySearchTerm({term: term, sort: 'hot'}));
                const searchQuery = {
                    term: term,
                }
    
                const query = createSearchParams(searchQuery);
    
                navigate({
                    pathname: `/search`,
                    search: `?${query}`
                });
                setTerm('');
            }

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