import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, PiggyBank, CreditCard, DollarSign } from 'lucide-react';
import CreateIcon from '@mui/icons-material/Create';
import EditarOrcamentoModal from './editarSaldo';

const Card = styled.div`
  background: #f5f6fa;
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 1rem;
`;

const BalanceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Balance = styled.div`
  h3 {
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const StatCard = styled.div<{ type: 'income' | 'expense' }>`
  background: ${props => props.type === 'income' ? '#e6f4ea' : '#fce8e6'};
  padding: 1rem;
  border-radius: 0.75rem;
  
  h3 {
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${props => props.type === 'income' ? '#34a853' : '#ea4335'};
  }
`;

const IconsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BalanceCard = () => {
  const [balance, setBalance] = useState(3480); // Inicializando com o saldo atual
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir o modal

  // Função para atualizar o saldo após salvar no modal
  const handleSaveBalance = (novoSaldo: number) => {
    setBalance(novoSaldo); // Atualiza o saldo com o novo valor
  };

  return (
    <Card>
      <BalanceHeader>
        <Balance>
          <h3>saldo atual</h3>
          <h2>R$ {balance.toFixed(2)}</h2> {/* Exibe o saldo com 2 casas decimais */}
        </Balance>
        <IconsStyled>
          <CreateIcon onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }} />
          <Eye size={24} />
        </IconsStyled>
      </BalanceHeader>
      
      <StatsGrid>
        <StatCard type="income">
          <h3><DollarSign size={16} /> receitas</h3>
          <span>R$ 5.000,00</span>
        </StatCard>
        <StatCard type="expense">
          <h3><CreditCard size={16} /> despesas</h3>
          <span>R$ 1.520,00</span>
        </StatCard>
      </StatsGrid>

      {/* Modal para editar o saldo */}
      <EditarOrcamentoModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        saldoAtual={balance} 
        onSave={handleSaveBalance} 
      />
    </Card>
  );
};

export default BalanceCard;
