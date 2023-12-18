import { useDarkMode } from "../DarkModeProvider";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import SearchBar from "./SearchBar";

import ledditLogo from '../../assets/images/leddit-logo.svg';

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={ darkMode ? 'darkMode-header': 'header'}>
            <div className="container">
            <div className="desktopLogo">
                <a href='/'>
                    <img className="logo" src={ledditLogo}/>
                    <h1>Leddit</h1>
                </a>
            </div>
                <SearchBar />
            <div className="left">
                <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </div>
            </div>
        </div>
    );
}

export default Header;