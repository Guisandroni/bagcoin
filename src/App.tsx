import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import styled from "styled-components";


const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 80px;
  background: #fff;
  min-height: 100vh;
`;

function App() {
  return (
<BrowserRouter>
      <Router/>
      
    </BrowserRouter>  );
}

export default App;