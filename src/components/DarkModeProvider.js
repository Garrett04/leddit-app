import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
}

const DarkModeProvider = ({ children }) => {
    let savedDarkMode = localStorage.getItem('darkMode') === 'enabled'; 
    const [ darkMode, setDarkMode ] = useState(savedDarkMode);
    
    const enableDarkMode = () => {
        document.body.classList.add('darkMode');
        document.getElementById('dark-mode-toggle').classList.add('flipButtonAnimation');
        document.getElementById('toggle').classList.add('svgColorChange');
        document.querySelector('.box').classList.add('darkMode-box');
        localStorage.setItem('darkMode', 'enabled');
        setDarkMode(true);
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkMode');
        document.getElementById('dark-mode-toggle').classList.remove('flipButtonAnimation');
        document.getElementById('toggle').classList.remove('svgColorChange');
        document.querySelector('.box').classList.remove('darkMode-box');
        localStorage.setItem('darkMode', 'disabled');
        setDarkMode(false);
    }

    useEffect(() => {
        if (darkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    }
  
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider