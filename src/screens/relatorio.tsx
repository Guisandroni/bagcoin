

import {
  AppBar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Card,
  Chip,
  Container,
  IconButton,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import {
  AccountBalance,
  Add,
  CreditCard,
  FilterList,
  Home,
  Menu,
  Person,
  ShowChart,
  Sort,
} from '@mui/icons-material'
import HouseboatIcon from '@mui/icons-material/Houseboat';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import SavingsIcon from '@mui/icons-material/Savings';
import { useState } from 'react'

export  function Relatorio() {
  const [timeFilter, setTimeFilter] = useState(0)
  const [bottomNav, setBottomNav] = useState(0)

  const totalEntries = 5000.00
  const totalExpenses = 1520.00
  const MetasInvest = 1000.00
  const MetasFerias = 8000.00
  const MetasCarro = 50000.00
  const balance = totalEntries - totalExpenses

  const progressValue = (totalExpenses / totalEntries) * 100

  return (
    <Box sx={{ pb: 7, minHeight: '100vh' }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ px: 2, py: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
           
            <Typography variant="h6" fontWeight="bold">
            Relatórios
            </Typography>
          </Box>
        
        </Box>
      </AppBar>

      <Tabs
        value={timeFilter}
        onChange={(_, value) => setTimeFilter(value)}
        variant="scrollable"
        scrollButtons={false}
        sx={{ px: 2, mb: 2 }}
      >
        <Tab label="Esse mês" sx={{ 
          bgcolor: timeFilter === 0 ? '#e8f5e9' : 'transparent',
          color: timeFilter === 0 ? '#2e7d32' : 'inherit',
          borderRadius: '20px',
          mr: 1
        }} />
        <Tab label="Mês passado" sx={{ mr: 1 }} />
        <Tab label="Essa semana" sx={{ mr: 1 }} />
        <Tab label="Hoje" />
      </Tabs>

      <Container>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Total
        </Typography>

        <Card sx={{ p: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                entradas
              </Typography>
              <Typography variant="h6" color="#2e7d32">
                R$ {totalEntries.toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body2" color="text.secondary">
                saídas
              </Typography>
              <Typography variant="h6" color="#d32f2f">
                R$ {totalExpenses.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: '#e8f5e9',
              '& .MuiLinearProgress-bar': {
                bgcolor: '#d32f2f',
              },
            }}
          />
        </Card>

        <Card sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center' }}>
          <AccountBalance sx={{ mr: 2, color: 'text.secondary' }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="text.secondary">
              balanço
            </Typography>
          </Box>
          <Typography variant="h6">
            R$ {balance.toFixed(2)}
          </Typography>
        </Card>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Entradas
        </Typography>

        <Card sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            bgcolor: '#e8f5e9', 
            p: 1, 
            borderRadius: 2,
            mr: 2
          }}>
            <ShowChart sx={{ color: '#2e7d32' }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>receitas</Typography>
          </Box>
          <Typography variant="h6">
            R$ {totalEntries.toFixed(2)}
          </Typography>
        </Card>

        <Card sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            bgcolor: '#e8f5e9', 
            p: 1, 
            borderRadius: 2,
            mr: 2
          }}>
            <CreditCard sx={{ color: '#2e7d32' }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>pagamentos cartão</Typography>
          </Box>
          <Typography variant="h6">
            R$ 0,00
          </Typography>
        </Card>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Saídas
        </Typography>

        <Card sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            bgcolor: '#ffebee', 
            p: 1, 
            borderRadius: 2,
            mr: 2
          }}>
            <AccountBalance sx={{ color: '#d32f2f' }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>gastos</Typography>
          </Box>
          <Typography variant="h6">
            R$ {totalExpenses.toFixed(2)}
          </Typography>
        </Card>

        <Card sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            bgcolor: '#ffebee', 
            p: 1, 
            borderRadius: 2,
            mr: 2
          }}>
            <CreditCard sx={{ color: '#d32f2f' }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>gastos cartão</Typography>
          </Box>
          <Typography variant="h6">
            R$ 0,00
          </Typography>
        </Card>

        <Typography variant="h6" sx={{ mb: 2 }}>
          Metas
        </Typography>

        <Card sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
  bgcolor: '#ffebee',             p: 1, 
            borderRadius: 2,
            mr: 2
          }}>
            <CarCrashIcon sx={{ color: '#FFA500' }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>Carro Novo</Typography>
          </Box>
          <Typography variant="h6">
            R$ {MetasCarro.toFixed(2)}
          </Typography>
        </Card>
        <Card sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
  bgcolor: '#ffebee',             p: 1, 
            borderRadius: 2,
            mr: 2
          }}>
            <HouseboatIcon sx={{ color: '#FFA500' }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>Férias</Typography>
          </Box>
          <Typography variant="h6">
            R$ {MetasFerias.toFixed(2)}
          </Typography>
        </Card>
        <Card sx={{ p: 2, mb: 4, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
  bgcolor: '#ffebee',             p: 1, 
            borderRadius: 2,
            mr: 2
          }}>
            <SavingsIcon sx={{ color: '#FFA500' }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>Investimentos</Typography>
          </Box>
          <Typography variant="h6">
            R$ {MetasInvest.toFixed(2)}
          </Typography>
        </Card>
      </Container>

    </Box>
  )
}

