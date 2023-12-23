import React from 'react';
import Main from './components/main/Main';

import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
} from 'react-router-dom';
import Root from './pages/root/Root';
import Subreddit from './pages/subreddit/Subreddit';
import User from './pages/user/User';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <Root /> }> {/*The Root will render the Header, SortBy, and Main*/}
    <Route index element={ <Main/> }/>
    <Route path="r/:subreddit" element={ <Subreddit/> }/> {/*This will be the subreddit route */}
    <Route path="search" element={ <Main /> }/> {/*This will be the search route*/}
    <Route path="u/:user" element={ <User /> }/> {/*This will be the user route*/}
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;