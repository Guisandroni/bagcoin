import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./router"
import { GlobalStyles } from "./styles/globalStyle"
import { defaultTheme } from "./styles/theme"


function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router/>
      <GlobalStyles/>
    </BrowserRouter>
  
    </ThemeProvider>
    </>
  )
}

export default App
