import React from 'react';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import DarkModeProvider from './components/DarkModeProvider';

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Posts />
    </DarkModeProvider>
  );
}

export default App;