import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, List, PlusCircle, BarChart2, User, Tag } from 'lucide-react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Dialog, 
  DialogContent, 
  Button,
  styled
} from '@mui/material';
import { TransactionForm } from './transaction';
import { CategoryForm } from './CategoryForm';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  top: 'auto',
  bottom: 0,
  background: theme.palette.background.paper,
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-around',
});

const NavButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  '&.active': {
    color: theme.palette.primary.main,
  },
}));

const AddButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: 56,
  height: 56,
  transform: 'translateY(-50%)',
  '&:hover': {
    background: theme.palette.primary.dark,
  },
}));

const MenuDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),

  },
}));

const MenuButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontSize: '1rem',
  margin:'0.5rem 0',
  borderRadius:'6px'
}));

const BottomNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [transactionType, setTransactionType] = useState<'income' | 'expense' | 'goal' | null>(null);

  const handleOptionClick = (type: 'income' | 'expense' | 'goal') => {
    setTransactionType(type);
    setShowMenu(false);
    setShowForm(true);
  };

  const handleCategoryClick = () => {
    setShowMenu(false);
    setShowCategoryForm(true);
  };

  return (
    <>
      <MenuDialog open={showMenu} onClose={() => setShowMenu(false)}>
        <DialogContent>
          <MenuButton fullWidth variant="contained" onClick={() => handleOptionClick('income')}>
            Receitas
          </MenuButton>
          <MenuButton fullWidth variant="contained" onClick={() => handleOptionClick('expense')}>
            Despesas
          </MenuButton>
          <MenuButton fullWidth variant="contained" onClick={() => handleOptionClick('goal')}>
            Metas
          </MenuButton>
          <MenuButton fullWidth variant="contained" onClick={handleCategoryClick}>
            Criar Categoria
          </MenuButton>
          <MenuButton fullWidth variant="outlined" onClick={() => setShowMenu(false)}>
            Cancelar
          </MenuButton>
        </DialogContent>
      </MenuDialog>

      {showForm && transactionType && (
        <TransactionForm
          type={transactionType}
          onClose={() => setShowForm(false)}
        />
      )}

      {showCategoryForm && (
        <CategoryForm onClose={() => setShowCategoryForm(false)} />
      )}

      <StyledAppBar position="fixed" color="default" elevation={3}>
        <StyledToolbar>
          <NavButton component={NavLink} to="/" exact>
            <Home />
            <Typography variant="caption">Início</Typography>
          </NavButton>
          <NavButton component={NavLink} to="/extrato">
            <List />
            <Typography variant="caption">Extrato</Typography>
          </NavButton>
          <AddButton onClick={() => setShowMenu(true)}>
            <PlusCircle />
          </AddButton>
          <NavButton component={NavLink} to="/reports">
            <BarChart2 />
            <Typography variant="caption">Relatórios</Typography>
          </NavButton>
          <NavButton component={NavLink} to="/profile">
            <User />
            <Typography variant="caption">Perfil</Typography>
          </NavButton>
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default BottomNav;

