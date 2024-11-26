import styled from 'styled-components';
import { Target, TrendingUp, Coffee, Car, Home } from 'lucide-react';

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

const GoalCard = styled.div`
  background: #f5f6fa;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const GoalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color};
  color: white;
`;

const GoalInfo = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.875rem;
    color: #666;
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  margin: 0.5rem 0;
  overflow: hidden;
`;

const Progress = styled.div<{ width: number; color: string }>`
  height: 100%;
  width: ${props => props.width}%;
  background: ${props => props.color};
  transition: width 0.3s ease;
`;

const GoalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #666;
  
  span:last-child {
    font-weight: 600;
  }
`;

const AddGoalButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: 2px dashed #1a73e8;
  border-radius: 1rem;
  background: none;
  color: #1a73e8;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const GoalsSection = () => {
  const goals = [
    {
      id: 1,
      title: 'Investimentos',
      description: 'Meta mensal',
      current: 800,
      target: 1000,
      icon: TrendingUp,
      color: '#1a73e8'
    },
    {
      id: 2,
      title: 'Férias',
      description: 'Meta anual',
      current: 3000,
      target: 8000,
      icon: Coffee,
      color: '#34a853'
    },
    {
      id: 3,
      title: 'Carro novo',
      description: 'Meta longo prazo',
      current: 15000,
      target: 50000,
      icon: Car,
      color: '#ea4335'
    }
  ];

  return (
    <Container>
      <Header>
        <h2>Minhas Metas</h2>
        <Target size={24} />
      </Header>

      {goals.map(goal => (
        <GoalCard key={goal.id}>
          <GoalHeader>
            <IconWrapper color={goal.color}>
              <goal.icon size={20} />
            </IconWrapper>
            <GoalInfo>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </GoalInfo>
          </GoalHeader>
          
          <ProgressBar>
            <Progress 
              width={(goal.current / goal.target) * 100} 
              color={goal.color}
            />
          </ProgressBar>
          
          <GoalAmount>
            <span>R$ {goal.current.toLocaleString('pt-BR')}</span>
            <span>R$ {goal.target.toLocaleString('pt-BR')}</span>
          </GoalAmount>
        </GoalCard>
      ))}

      {/* <AddGoalButton>
        <Target size={20} />
        Adicionar nova meta
      </AddGoalButton> */}
    </Container>
  );
};

export default GoalsSection;