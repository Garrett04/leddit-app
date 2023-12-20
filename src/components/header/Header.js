import { useDarkMode } from "../DarkModeProvider";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import SearchBar from "./SearchBar";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button } from "@mui/material";
import ledditLogo from '../../assets/images/leddit-logo.svg';
import { useEffect } from "react";

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    
    
    const handleClick = () => {
        const subredditNav = document.querySelector('aside');
        
        if (subredditNav.style.display === 'flex') {
            subredditNav.style.display = 'none';
        } else {
            subredditNav.style.display = 'flex';
        }
    }

    return (
        <div className={ darkMode ? 'darkMode-header': 'header'}>
            <div className="container">
            <div className="desktopLogo">
                <a href='/'>
                    <img className="logo" src={ledditLogo} alt='leddit logo' />
                    <h1>Leddit</h1>
                </a>
            </div>
                <SearchBar />
            <div className="left">
                <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <div className='subredditNavBtn'>
                    <Button 
                        onClick={handleClick} 
                        variant="contained"
                        color="info"
                        sx={{ boxShadow: '0' }}
                    >
                        <MenuRoundedIcon fontSize="medium" color="inherit" sx={{ height: '1.5rem' }} />
                    </Button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Header;