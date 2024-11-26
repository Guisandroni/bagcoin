import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { Grid3x3, CreditCard, Building2, Download } from 'lucide-react';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <Button
        startIcon={<Grid3x3 size={18} />}
        variant={activeCategory === 'geral' ? 'contained' : 'outlined'}
        onClick={() => onCategoryChange('geral')}
        sx={{
          borderRadius: '20px',
          textTransform: 'none',
          bgcolor: activeCategory === 'geral' ? '#00C853' : '#F1F5F9',
          color: activeCategory === 'geral' ? 'white' : 'text.primary',
          border: 'none',
          '&:hover': {
            bgcolor: activeCategory === 'geral' ? '#00B34A' : '#E2E8F0',
            border: 'none',
          },
        }}
      >
        geral
      </Button>
      <Button
        startIcon={<CreditCard size={18} />}
        variant={activeCategory === 'cartoes' ? 'contained' : 'outlined'}
        onClick={() => onCategoryChange('cartoes')}
        sx={{
          borderRadius: '20px',
          textTransform: 'none',
          bgcolor: activeCategory === 'cartoes' ? '#00C853' : '#F1F5F9',
          color: activeCategory === 'cartoes' ? 'white' : 'text.primary',
          border: 'none',
          '&:hover': {
            bgcolor: activeCategory === 'cartoes' ? '#00B34A' : '#E2E8F0',
            border: 'none',
          },
        }}
      >
        Despesas
      </Button>
      <Button
        startIcon={<Building2 size={18} />}
        variant={activeCategory === 'contas' ? 'contained' : 'outlined'}
        onClick={() => onCategoryChange('contas')}
        sx={{
          borderRadius: '20px',
          textTransform: 'none',
          bgcolor: activeCategory === 'contas' ? '#00C853' : '#F1F5F9',
          color: activeCategory === 'contas' ? 'white' : 'text.primary',
          border: 'none',
          '&:hover': {
            bgcolor: activeCategory === 'contas' ? '#00B34A' : '#E2E8F0',
            border: 'none',
          },
        }}
      >
        Receitas
      </Button>
      <IconButton sx={{ bgcolor: '#F1F5F9', width: 36, height: 36 }}>
        <Download size={18} />
      </IconButton>
    </Box>
  );
}