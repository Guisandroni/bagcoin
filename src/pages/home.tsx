import styled from "styled-components"


export function Home(){
    const Container = styled.div`
    

    nav{
        display:flex;
        justify-content:space-between;
    }
    `

    const Header = styled.div`
    
    `

    const MidCard = styled.div`
    
    `

    const Card = styled.div`
    
    `

    const Footer = styled.div`
        display:flex;
        justify-content:space-around;
    `

    const Acess = styled.div`
        
    `

    const StyledCont = styled.div`
    
    `

    const Cont = styled.div`
    `
    const ContainerCont = styled.div`
    `
    return(
        
        <Container>

        <nav>
            <p>x</p>
            <input type="text"placeholder="Search" />
            <p>x</p>
        </nav>

        <Header>
            <p>Dollar</p>
            <h1>20,00</h1>
            <p>balance avaliable</p>
            <button>Add money</button>

        </Header>

        <MidCard>
            <Card>
                <img src="" alt="" />
                <p>Send</p>
            </Card>

            <Card>
                <img src="" alt="" />
                <p>Request</p>
            </Card>

            <Card>
                <img src="" alt="" />
                <p>Bank</p>
            </Card>
        </MidCard>

        <StyledCont>
            <h1>Transaction</h1>

            <ContainerCont>
                <Cont>
                    <div>
                        
                    <img src="" alt="" />
                    <p>Speding</p>
                    </div>

                    <span>-R$900</span>
                </Cont>

                <Cont>
                    <div>
                        
                    <img src="" alt="" />
                    <p>Income</p>
                    </div>

                    <span>-R$900</span>
                </Cont>

                <Cont>
                    <div>
                        
                    <img src="" alt="" />
                    <p>Bills</p>
                    </div>

                    <span>-R$900</span>
                </Cont>

                <Cont>
                    <div>
                        
                    <img src="" alt="" />
                    <p>Savings</p>
                    </div>

                    <span>-R$900</span>
                </Cont>
            </ContainerCont>
        </StyledCont>

        <Footer>
            <Acess>
                <button>Home</button>
            </Acess>
            <Acess>
                <button>Graphics</button>
            </Acess>
            <Acess>
                <button>Profile</button>
            </Acess>
        </Footer>
        </Container>
    )
}