import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline:0;
        box-shadow: 0 0 0 2px ${props => props.theme["green-500"]}
    }

    body{
        background-color: ${props => props.theme['background-white']};
        color:${props => props.theme["gray-900"]}
    }

    body, input, textarea, button, form{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
`

// definindo estilização global para o projeto