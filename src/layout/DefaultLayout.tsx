import { Outlet } from "react-router-dom";
import { Home } from "../pages/home";



export function DefaultLayout(){
    return(

        <>
        <Home/>
        <Outlet/>
        </>
    )
}