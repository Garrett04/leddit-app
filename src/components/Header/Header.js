import LightDarkTheme from "./DarkModeToggle/DarkModeToggle";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
            <div className="desktopLogo">
                <a href='./'>
                    <img className="logo" src='./images/leddit-logo.svg'/>
                    <h1>Leddit</h1>
                </a>
            </div>
                <SearchBar />
            <div className="left">
                <SignIn />
                <LightDarkTheme />
            </div>
            </div>
        </div>
    );
}

export default Header;