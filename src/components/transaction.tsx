'use client'

import { useState } from 'react'
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
  ToggleButton,
  Paper,
  Slide,
  alpha,
  styled
} from '@mui/material'
import { ArrowLeft, Calculator, Tag, Calendar, ListPlus } from 'lucide-react'

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  margin: 0,
  borderRadius: '24px 24px 0 0',
  zIndex: 1200,
  overflow: 'hidden',
}))

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'type'
})<{ type: 'income' | 'expense' | 'goal' }>(({ theme, type }) => {
  const colors = {
    income: '#00a152',
    expense: '#d32f2f',
    goal: '#f57c00'
  }
  
  return {
    minHeight: '20vh',
    padding: '1.5rem',
    backgroundColor: colors[type],
    color: 'white',
    borderRadius: '24px 24px 0 0',
    transition: 'all 0.3s ease',
  }
})

const Form = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '24px 24px 0 0',
  padding: '24px',
  marginTop: '16px',
  minHeight: '60vh',
}))

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root': {
    border: `1px solid ${theme.palette.divider}`,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}))

interface TransactionFormProps {
  type: 'income' | 'expense' | 'goal'
  onClose: () => void
}

export  function TransactionForm({ type, onClose }: TransactionFormProps) {
  const [value, setValue] = useState('')
  const [dateType, setDateType] = useState('today')
  const [customDate, setCustomDate] = useState(new Date().toISOString().split('T')[0])

  const getTitle = () => {
    switch (type) {
      case 'income':
        return 'Nova Receita'
      case 'expense':
        return 'Nova Despesa'
      case 'goal':
        return 'Nova Meta'
    }
  }

  return (
    <Slide direction="up" in mountOnEnter unmountOnExit>
      <StyledPaper elevation={8}>
        <Container type={type}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <IconButton 
              onClick={onClose}
              sx={{ 
                color: 'white',
                '&:hover': { 
                  backgroundColor: alpha('#fff', 0.1) 
                } 
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {getTitle()}
            </Typography>
            <Button 
              variant="contained" 
              size="small"
              sx={{ 
                bgcolor: 'white',
                color: type === 'income' ? 'success.main' : type === 'expense' ? 'error.main' : 'warning.main',
                '&:hover': {
                  bgcolor: alpha('#fff', 0.9)
                }
              }}
            >
              Salvar
            </Button>
          </Box>

          <Form>
            <TextField
              fullWidth
              placeholder="Título da transação"
              variant="outlined"
              size="medium"
              InputProps={{
                startAdornment: <Tag className="w-4 h-4 mr-2 text-gray-400" />,
              }}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              placeholder="Adicionar descrição"
              variant="outlined"
              multiline
              rows={2}
              size="medium"
              InputProps={{
                startAdornment: <ListPlus className="w-4 h-4 mr-2 text-gray-400" />,
              }}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              placeholder="R$ 0,00"
              variant="outlined"
              size="medium"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              InputProps={{
                startAdornment: <Calculator className="w-4 h-4 mr-2 text-gray-400" />,
              }}
              sx={{ mb: 3 }}
            />

            {type !== 'goal' && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
                  Data da transação
                </Typography>
                <StyledToggleButtonGroup
                  value={dateType}
                  exclusive
                  onChange={(e, value) => value && setDateType(value)}
                  fullWidth
                  size="large"
                >
                  <ToggleButton value="today">Hoje</ToggleButton>
                  <ToggleButton value="yesterday">Ontem</ToggleButton>
                  <ToggleButton value="custom">
                    <TextField
                      type="date"
                      size="small"
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      sx={{ 
                        width: '100%',
                        '& .MuiInputBase-input': { 
                          color: dateType === 'custom' ? 'primary.contrastText' : 'inherit' 
                        }
                      }}
                    />
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Box>
            )}

            {type !== 'goal' ? (
              <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                  label="Categoria"
                  size="medium"
                  defaultValue=""
                  sx={{ '& .MuiSelect-select': { display: 'flex', alignItems: 'center' } }}
                >
                  <MenuItem value="food">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      🍽️ Alimentação
                    </Box>
                  </MenuItem>
                  <MenuItem value="transport">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      🚗 Transporte
                    </Box>
                  </MenuItem>
                  <MenuItem value="bills">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      📄 Contas
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            ) : (
              <FormControl fullWidth>
                <InputLabel>Período</InputLabel>
                <Select
                  label="Período"
                  size="medium"
                  defaultValue=""
                  sx={{ '& .MuiSelect-select': { display: 'flex', alignItems: 'center' } }}
                >
                  <MenuItem value="short">Curto Prazo</MenuItem>
                  <MenuItem value="medium">Médio Prazo</MenuItem>
                  <MenuItem value="long">Longo Prazo</MenuItem>
                </Select>
              </FormControl>
            )}
          </Form>
        </Container>
      </StyledPaper>
    </Slide>
  )
}

