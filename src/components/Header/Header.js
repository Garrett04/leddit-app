import { useDarkMode } from "../DarkModeProvider";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import SearchBar from "./SearchBar";

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={ darkMode ? 'darkMode-header': 'header'}>
            <div className="container">
            <div className="desktopLogo">
                <a href='./'>
                    <img className="logo" src='./images/leddit-logo.svg'/>
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