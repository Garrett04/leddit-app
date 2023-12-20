import { useDarkMode } from "../DarkModeProvider";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import SearchBar from "./SearchBar";
import Drawer from '@mui/material/Drawer';
import ledditLogo from '../../assets/images/leddit-logo.svg';

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
                <button className='subredditNavBtn' onClick={handleClick}>SubNav</button>
            </div>
            </div>
        </div>
    );
}

export default Header;