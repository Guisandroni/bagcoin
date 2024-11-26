import styled from "styled-components"

const Container = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    height:100vh;
`

export function Relatorio(){
    return(
        <Container>
        <h1>Relatorios</h1>
        </Container>
    )
}