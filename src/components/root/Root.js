import { Outlet } from "react-router-dom";
import DarkModeProvider from "../DarkModeProvider";
import Header from "../header/Header";
import SortBy from "../sortBy/SortBy";


const Root = () => {
  return (
    <DarkModeProvider>
        <Header />
        <SortBy />
        <Outlet />
    </DarkModeProvider>
  )
}

export default Root