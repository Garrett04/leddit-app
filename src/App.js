import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import DarkModeProvider from './components/DarkModeProvider';
import SortBy from './components/SortBy/SortBy';

function App() {
    return (
      <DarkModeProvider>
        <Header />
        <SortBy />
        <Main />
      </DarkModeProvider>
    );
}

export default App;