import { Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import { Relatorio } from "./screens/relatorio";
import { DefaultLayout } from "./layout";
import { Extrato } from "./screens/extrato";
import { Profile } from "./screens/profile";
import { Login } from "./screens/login";
import LoginLayout from "./layoutLogin";
import { Icon } from "./screens/icon";
import { Signup } from "./screens/signup";




export function Router(){
    return(

        <>
       
      <Routes>
      <Route path="/login" element={<LoginLayout><Login /></LoginLayout>} />
      <Route path="/signup" element={<LoginLayout><Signup /></LoginLayout>} />

      <Route path="/icon" element={<LoginLayout><Icon /></LoginLayout>} />

      

        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/reports" element={<Relatorio />} /> 
          <Route path="/Extrato" element={<Extrato />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
   
        
        </>
    )
}