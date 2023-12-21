import { useState } from "react";
import { fetchDataBySearchTerm } from "../../data/redditData";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button } from '@mui/material';

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

    const handleSearchTerm = () => {
        let searchQuery;
        setTerm(term.toLowerCase());
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
    
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          handleSearchTerm();
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
                onKeyDown={handleKeyPress}
            />
            <Button
                onClick={handleSearchTerm}
                variant='contained'
                sx={{minWidth: '.2rem', margin:'0 1rem 0 0'}}
            >
                <SearchRoundedIcon 
                    fontSize='small'
                    sx={{width: '1rem', margin: '0'}}
                />
             </Button>
        </>
    );
}

export default SearchBar;