import React from 'react';
import { Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { DollarSign, CreditCard, Building2, Receipt } from 'lucide-react';

interface TransactionSectionProps {
  title: string;
  items: Array<{
    category: string;
    amount: number;
  }>;
  type: 'income' | 'expense';
}

const getIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'receitas':
      return <DollarSign color="#4caf50" />;
    case 'pagamentos cartão':
      return <CreditCard color="#4caf50" />;
    case 'gastos':
      return <Building2 color="#ef5350" />;
    case 'gastos cartão':
      return <Receipt color="#ef5350" />;
    default:
      return <DollarSign />;
  }
};

const TransactionSection: React.FC<TransactionSectionProps> = ({ title, items, type }) => {
  return (
    <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{title}</Typography>
      <List>
        {items.map((item, index) => (
          <ListItem 
            key={index}
            sx={{ 
              px: 2, 
              py: 1.5,
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
              mb: 1
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              {getIcon(item.category)}
            </ListItemIcon>
            <ListItemText 
              primary={item.category}
              sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }}
            />
            <Typography 
              variant="body1" 
              color={type === 'income' ? 'success.main' : 'error.main'}
            >
              R$ {item.amount.toFixed(2)}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TransactionSection;