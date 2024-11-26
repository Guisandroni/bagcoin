import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ShoppingBag, Shirt, Building2 } from 'lucide-react';

interface TransactionItemProps {
  type: 'mercado' | 'roupas' | 'salario';
  title: string;
  category: string;
  amount: string;
  date: string;
  status: 'paga' | 'recebido';
  paymentType: string;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  title,
  category,
  amount,
  date,
  status,
  paymentType,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'mercado':
        return <ShoppingBag />;
      case 'roupas':
        return <Shirt />;
      case 'salario':
        return <Building2 />;
      default:
        return <ShoppingBag />;
    }
  };

  const getColor = () => {
    switch (status) {
      case 'paga':
        return '#FF5252';
      case 'recebido':
        return '#00C853';
      default:
        return '#000000';
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'mercado':
        return '#E8F5E9';
      case 'roupas':
        return '#F3E5F5';
      case 'salario':
        return '#E3F2FD';
      default:
        return '#E8F5E9';
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: getBgColor(),
            color: getColor(),
          }}
        >
          {getIcon()}
        </Avatar>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography
              variant="caption"
              sx={{
                color: getColor(),
                bgcolor: `${getColor()}15`,
                px: 1,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              {status}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Typography
          variant="subtitle1"
          sx={{ color: getColor() }}
        >
          {amount}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {paymentType}
        </Typography>
      </Box>
    </Box>
  );
}