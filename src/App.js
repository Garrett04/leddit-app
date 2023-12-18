import React from 'react';
import Main from './components/main/Main';

import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
} from 'react-router-dom';
import Root from './components/root/Root';
import Subreddit from './pages/subreddit/Subreddit';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Main/> }/>
    <Route index path="r/:subreddit" element={ <Subreddit/> }/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );

  // return (
  //   <DarkModeProvider>
  //     <Header />
  //     <SortBy />
  //     <Main />
  //   </DarkModeProvider>
  // );
}

export default App;