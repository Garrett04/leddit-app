import { Outlet } from "react-router-dom";
import DarkModeProvider from "../../components/DarkModeProvider";
import Header from "../../components/header/Header";
import SortBy from "../../components/sortBy/SortBy";


const Root = () => {
  return (
    <DarkModeProvider> {/*This is the component that will toggle between dark mode and light mode*/}
        <Header />
        <SortBy />
        <Outlet />
    </DarkModeProvider>
  )
}

export default Root