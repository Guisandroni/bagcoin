import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  TextField, 
  Button, 
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import { ArrowLeft, Calculator } from 'lucide-react';

const Container = styled.div<{ type: 'income' | 'expense' | 'goal' }>`
  min-height: 20vh;
  padding: 1.5rem;
  margin: 2rem 2rem 0;
  background-color: ${({ type }) => 
    type === 'expense' ? '#8B0000' : type === 'income' ? '#006400' : '#FFA500'};
  color: white;
  border-radius: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Form = styled.form`
  background: white;
  border-radius: 12px 12px 0 0;
  padding: 15px;
  margin-top: 15px;
  min-height: auto;
`;

interface TransactionFormProps {
  type: 'income' | 'expense' | 'goal';
  onClose: () => void;  // Função de fechamento que pode ser passada como prop
}

export const TransactionForm: React.FC<TransactionFormProps> = ({ type, onClose }) => {
  const [value, setValue] = useState('');
  const [dateType, setDateType] = useState('today');
  const [customDate, setCustomDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <Container type={type}>
      <Header>
        <IconButton color="inherit" size="small" onClick={onClose}>
          <ArrowLeft /> {/* A seta agora fecha ou volta */}
        </IconButton>
        <Typography variant="h6" component="div" fontSize="1.2rem">
          {type === 'expense' ? 'Despesa' : type === 'income' ? 'Receita' : 'Meta'}
        </Typography>
        <Button color="inherit" size="small">
          Aplicar
        </Button>
      </Header>

      <Form>
        <TextField
          fullWidth
          label="Título"
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Descrição"
          variant="outlined"
          multiline
          rows={1}
          size="small"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Valor"
          variant="outlined"
          size="small"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{ mb: 2 }}
        />

        {type !== 'goal' && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              Data
            </Typography>
            <ToggleButtonGroup
              value={dateType}
              exclusive
              onChange={(e, value) => value && setDateType(value)}
              fullWidth
              sx={{ mb: 1 }}
            >
              <ToggleButton value="today" size="small">Hoje</ToggleButton>
              <ToggleButton value="yesterday" size="small">Ontem</ToggleButton>
              <ToggleButton value="custom" size="small">
                <TextField
                  type="date"
                  size="small"
                  value={customDate}
                  onChange={(e) => setCustomDate(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  sx={{ width: '100%' }}
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        )}

        {type !== 'goal' && (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel size="small">Categoria</InputLabel>
            <Select label="Categoria" size="small">
              <MenuItem value="food">Alimentação</MenuItem>
              <MenuItem value="transport">Transporte</MenuItem>
              <MenuItem value="bills">Contas</MenuItem>
            </Select>
          </FormControl>
        )}

        {type === 'goal' && (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel size="small">Período</InputLabel>
            <Select label="Período" size="small">
              <MenuItem value="short">Curto Prazo</MenuItem>
              <MenuItem value="medium">Médio Prazo</MenuItem>
              <MenuItem value="long">Longo Prazo</MenuItem>
            </Select>
          </FormControl>
        )}
      </Form>
    </Container>
  );
};
