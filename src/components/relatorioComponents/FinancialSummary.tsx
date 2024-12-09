import React from 'react';
import { Paper, Typography, Box, LinearProgress } from '@mui/material';
import { Scale } from 'lucide-react';

interface FinancialSummaryProps {
  income: number;
  expenses: number;
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ income, expenses }) => {
  const balance = income - expenses;
  const progressValue = (expenses / income) * 100;

  return (
    <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Total</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Typography color="text.secondary" variant="body2">entradas</Typography>
          <Typography color="success.main" variant="h6">
            R$ {income.toFixed(2)}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography color="text.secondary" variant="body2">saídas</Typography>
          <Typography color="error.main" variant="h6">
            R$ {expenses.toFixed(2)}
          </Typography>
        </Box>
      </Box>

      <LinearProgress 
        variant="determinate" 
        value={progressValue}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#e8f5e9',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#ef5350',
          }
        }}
      />

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mt: 2,
        p: 2,
        backgroundColor: '#f5f5f5',
        borderRadius: 2
      }}>
        <Scale size={20} />
        <Box sx={{ ml: 1 }}>
          <Typography variant="body2" color="text.secondary">balanço</Typography>
          <Typography variant="h6">R$ {balance.toFixed(2)}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default FinancialSummary;