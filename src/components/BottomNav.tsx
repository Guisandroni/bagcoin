import React, { useState } from 'react';
import styled from 'styled-components';
import { Home, List, PlusCircle, BarChart2, User } from 'lucide-react';
import { TransactionForm } from './transaction'; // Certifique-se de que o caminho esteja correto
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  padding: 0.75rem 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

const NavButton = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: ${(props) => (props.$active ? '#1a73e8' : '#666')};

  span {
    font-size: 0.75rem;
  }
`;

const AddButton = styled.button`
  background: #1a73e8;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transform: translateY(-24px);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Menu = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width:80%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const MenuButton = styled.button`
  padding: 12px;
  border: none;
  background: #1a73e8;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #155bb5;
  }
`;

const BottomNav = () => {
  const [showMenu, setShowMenu] = useState(false); // Controla o menu de opções
  const [showForm, setShowForm] = useState(false); // Controla a exibição do formulário
  const [transactionType, setTransactionType] = useState<'income' | 'expense' | 'goal' | null>(null); // Tipo selecionado

  const handleOptionClick = (type: 'income' | 'expense' | 'goal') => {
    setTransactionType(type);
    setShowMenu(false); // Fecha o menu
    setShowForm(true); // Abre o formulário
  };

  return (
    <>
      {/* Menu de opções */}
      {showMenu && (
        <Overlay>
          <Menu>
            <MenuButton onClick={() => handleOptionClick('income')}>Receitas</MenuButton>
            <MenuButton onClick={() => handleOptionClick('expense')}>Despesas</MenuButton>
            <MenuButton onClick={() => handleOptionClick('goal')}>Metas</MenuButton>
            <MenuButton onClick={() => setShowMenu(false)} style={{ background: '#ccc' }}>
              Cancelar
            </MenuButton>
          </Menu>
        </Overlay>
      )}

      {/* Exibição do formulário */}
      {showForm && transactionType && (
        <Overlay>
          <TransactionForm
            type={transactionType}
            onClose={() => setShowForm(false)} // Fecha o formulário
          />
        </Overlay>
      )}

      <Nav>
        <NavButton $active>
          <Home size={20} />
          <NavLink to='/'>
          <span>Início</span>
          </NavLink>
        </NavButton>
        <NavButton>
          <List size={20} />
          <NavLink to='/extrato'>
          <span>Extrato</span>
          </NavLink>
        </NavButton>
        <AddButton onClick={() => setShowMenu(true)}> {/* Abre o menu */}
          <PlusCircle size={24} />
        </AddButton>
        <NavButton>
          <BarChart2 size={20} />
          <NavLink to='/reports'>
          <span>Relatórios</span>
          </NavLink>
        </NavButton>
        <NavButton>
          <User size={20} />
          <NavLink to='/profile'>
          <span>Perfil</span>
          </NavLink>
        </NavButton>
      </Nav>
    </>
  );
};

export default BottomNav;
