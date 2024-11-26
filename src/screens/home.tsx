import styled from "styled-components";
import BalanceCard from "../components/BalanceCard";
import BottomNav from "../components/BottomNav";
import GoalsSection from "../components/GoalsSection";
import Header from "../components/Header";
import TransactionsList from "../components/TransactionsList";
import { Orcamento } from "../components/orcamento";


const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 80px;
  background: #fff;
  min-height: 100vh;
`;

function Home() {
  return (
    <AppContainer>
      <Header />
      <BalanceCard />
      
      <GoalsSection />
      <TransactionsList />
  
      <BottomNav />
    </AppContainer>
  );
}

export default Home;