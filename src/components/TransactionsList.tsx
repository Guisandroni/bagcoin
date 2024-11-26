import React from 'react';
import styled from 'styled-components';
import { ShoppingBag, Shirt, Briefcase } from 'lucide-react';

const Container = styled.div`
  padding: 1rem;
  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  background: ${props => props.$active ? '#1a73e8' : '#f5f6fa'};
  color: ${props => props.$active ? '#fff' : '#666'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  white-space: nowrap;
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const IconWrapper = styled.div<{ category: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  background: ${props => {
    switch (props.category) {
      case 'mercado': return '#e6f4ea';
      case 'roupas': return '#fce8e6';
      default: return '#e8f0fe';
    }
  }};
`;

const TransactionInfo = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.875rem;
    color: #666;
  }
`;

const Amount = styled.span<{ type: 'income' | 'expense' }>`
  font-weight: 600;
  color: ${props => props.type === 'income' ? '#34a853' : '#ea4335'};
`;

const TransactionsList = () => {
  return (
    <Container>
      <Header>
        <h2>Transações</h2>
      </Header>
      
      <Filters>
        <FilterButton $active>geral</FilterButton>
        <FilterButton>Receitas</FilterButton>
        <FilterButton>Despesas</FilterButton>
      </Filters>
      
      <div>
        <TransactionItem>
          <IconWrapper category="mercado">
            <ShoppingBag size={20} />
          </IconWrapper>
          <TransactionInfo>
            <h3>mercado</h3>
            <p>CARTEIRA</p>
          </TransactionInfo>
          <Amount type="expense">R$ 1.200,00</Amount>
        </TransactionItem>
        
        <TransactionItem>
          <IconWrapper category="roupas">
            <Shirt size={20} />
          </IconWrapper>
          <TransactionInfo>
            <h3>roupas</h3>
            <p>CARTEIRA</p>
          </TransactionInfo>
          <Amount type="expense">R$ 320,00</Amount>
        </TransactionItem>
        
        <TransactionItem>
          <IconWrapper category="salario">
            <Briefcase size={20} />
          </IconWrapper>
          <TransactionInfo>
            <h3>salário</h3>
            <p>CARTEIRA</p>
          </TransactionInfo>
          <Amount type="income">R$ 5.000,00</Amount>
        </TransactionItem>
      </div>
    </Container>
  );
};

export default TransactionsList;