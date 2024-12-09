import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

interface PeriodFilterProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

const PeriodFilter: React.FC<PeriodFilterProps> = ({ selectedPeriod, onPeriodChange }) => {
  const periods = ['Esse mês', 'Mês passado', 'Essa semana', 'Hoje'];

  return (
    <ButtonGroup 
      variant="outlined" 
      sx={{ 
        mb: 2,
        '& .MuiButton-root': {
          borderRadius: '20px',
          mx: 0.5,
          textTransform: 'none',
          borderColor: '#e0e0e0',
          color: '#666',
          '&.selected': {
            backgroundColor: '#00a86b',
            color: 'white',
            borderColor: '#00a86b',
            '&:hover': {
              backgroundColor: '#008f5b',
              borderColor: '#008f5b',
            }
          }
        }
      }}
    >
      {periods.map((period) => (
        <Button
          key={period}
          className={selectedPeriod === period ? 'selected' : ''}
          onClick={() => onPeriodChange(period)}
        >
          {period}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default PeriodFilter;