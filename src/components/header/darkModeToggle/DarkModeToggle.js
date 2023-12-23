import { useDarkMode } from '../../DarkModeProvider';
import './DarkModeToggle.css';
import React from 'react';

const DarkModeToggle = ({toggleDarkMode}) => {
    const { darkMode } = useDarkMode;

    return (
       <div className={ darkMode ? 'darkMode-box' : 'box' }> 
            <button 
                id="dark-mode-toggle" 
                className="dark-mode-toggle" 
                onClick={toggleDarkMode}
                aria-label='Dark Mode Toggle'
                title='Dark Mode Toggle'
            >
                <svg id='toggle' className={ darkMode ? 'svgColorChange' : '' } width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                    <path fill="#C84B31" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"/>
                </svg>
            </button>
        </div>
    );
}

export default DarkModeToggle;