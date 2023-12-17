import React from 'react';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import DarkModeProvider from './components/DarkModeProvider';
import SortBy from './components/SortBy/SortBy';

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <SortBy />
      <Posts />
    </DarkModeProvider>
  );
}

export default App;