import { Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import styled from "styled-components";


export function DefaultLayout(){

    
const LayoutContainer = styled.div`
`
    return (

        <LayoutContainer>
            
            <BottomNav/>
            <Outlet/>
        </LayoutContainer>
    )
}