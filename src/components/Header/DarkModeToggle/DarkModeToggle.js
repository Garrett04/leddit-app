import './DarkModeToggle.css';
import React, { useState, useEffect } from 'react';

const LightDarkTheme = () => {
    let savedDarkMode = localStorage.getItem('darkMode') === 'enabled'; 
    const [ darkMode, setDarkMode ] = useState(savedDarkMode);

    const enableDarkMode = () => {
        document.body.classList.add('darkMode');
        // document.getElementById('post').classList.add('postDark');
        document.getElementById('dark-mode-toggle').classList.add('flipButtonAnimation');
        document.getElementById('toggle').classList.add('svgColorChange');
        localStorage.setItem('darkMode', 'enabled');
        setDarkMode(true);
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkMode');
        document.getElementById('dark-mode-toggle').classList.remove('flipButtonAnimation');
        document.getElementById('toggle').classList.remove('svgColorChange');
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

    const handleClick = () => {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
       <div className='box'> 
            <button 
                id="dark-mode-toggle" 
                className="dark-mode-toggle" 
                onClick={handleClick}
            >
                <svg id='toggle' width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                    <path fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"/>
                </svg>
            </button>
        </div>
    );
}

export default LightDarkTheme;