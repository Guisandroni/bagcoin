
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Avatar,
  Typography,
  Paper,
  Container,
} from '@mui/material'
import {
  Person,
  Settings,
  Star,
  CreditCard,
  AccountBalance,
  Category,
  ViewList,
  Timeline,
  Warning,
  Flag,
  Download,
  Description,
  ExitToApp,
} from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export  function Profile() {
  const [value, setValue] = useState(4)

  const menuItems = [
    { icon: <Person />, text: 'Editar Perfil' },
    { icon: <Settings />, text: 'configurações' },
    // { icon: <Star />, text: 'meu plano' },
    // { icon: <CreditCard />, text: 'meus cartões' },
    // { icon: <AccountBalance />, text: 'minhas contas' },
    { icon: <Category />, text: 'minhas categorias' },
    // { icon: <ViewList />, text: 'minhas subcategorias' },
    { icon: <Timeline />, text: 'minhas metas' },
    // { icon: <Warning />, text: 'meus limites' },
    { icon: <Flag />, text: 'sugestões e problemas' },
    { icon: <Download />, text: 'exportar dados' },
    { icon: <Description />, text: 'termos de uso' },
    { icon: <Link to='/login'>
            <ExitToApp />
            </Link>, 
            text: 'sair desta conta'
             },
  ]

  return (
    <Container 
      sx={{ 
        pb: 7, 
        height: '100vh', 
        bgcolor: 'background.default',
        px: 0,
        maxWidth: '100%!important'
      }}
    >
      <Paper 
        elevation={0} 
        sx={{ 
          pt: 2, 
          pb: 3, 
          px: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          bgcolor: 'background.default'
        }}
      >
        <Avatar
          sx={{ width: 80, height: 80, mb: 1 }}
          src="https://github.com/Guisandroni.png"
          alt="Profile picture"
        />
        <Typography variant="h6" component="h1" gutterBottom>
          Olá, Guisandroni!
        </Typography>
      
      </Paper>

      <List sx={{ bgcolor: 'background.default', pt: 0 }}>
        {menuItems.map((item, index) => (
          <ListItem 
            key={index} 
            disablePadding
            sx={{ 
              borderBottom: index !== menuItems.length - 1 ? '1px solid rgba(0, 0, 0, 0.06)' : 'none'
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  sx: { 
                    fontWeight: 400,
                    fontSize: '1rem'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Paper 
        sx={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0,
          borderTop: '1px solid rgba(0, 0, 0, 0.12)'
        }} 
        elevation={3}
      >
      </Paper>
    </Container>
  )
}

