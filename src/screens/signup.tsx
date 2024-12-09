'use client'

import { useState } from 'react'
import { 
  Avatar, 
  Box, 
  Button, 
  Container, 
  Divider, 
  Link, 
  TextField, 
  Typography, 
  InputAdornment, 
  IconButton,
  Paper,
  Fade,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Google, Visibility, VisibilityOff, Mail, Person } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Signup submitted', { name, email, password })
  }

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper 
        elevation={0} 
        sx={{
          width: '100%',
          overflow: 'hidden',
          boxShadow: 'none', // Remove a sombra personalizada
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            p: 4,
          }}
        >
          <MotionBox
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Avatar
              sx={{ width: 80, height: 80, mb: 2 }}
              src="https://bagcoin.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnzambf4m%2Fimage%2Fupload%2Fv1708987396%2FBagCoin_Blog%2Fbag_shine____hetbmm.gif&w=256&q=75"
              alt="Logo"
            />
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              BagCoin
            </Typography>
          </MotionBox>

          <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'medium' }}>
            Crie sua conta
          </Typography>

          <Button
            variant="contained"
            fullWidth
            startIcon={<Google />}
            sx={{
              backgroundColor: theme.palette.grey[900],
              color: 'white',
              textTransform: 'none',
              py: 1.5,
              '&:hover': {
                backgroundColor: theme.palette.grey[800],
              },
            }}
          >
            Cadastrar com o Google
          </Button>

          <Divider sx={{ width: '100%', my: 2 }}>ou</Divider>

          <Fade in={true}>
            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <TextField
                fullWidth
                label="Nome"
                placeholder="Digite seu nome"
                required
                type="text"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Email"
                placeholder="Digite seu email"
                required
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Senha"
                placeholder="********"
                required
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="start"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <NavLink to='/' style={{ textDecoration: 'none', width: '100%' }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    textTransform: 'none',
                    py: 1.5,
                    mt: 2,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Criar conta
                </Button>
              </NavLink>
            </Box>
          </Fade>

          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Ao continuar, você concorda com nossos{' '}
            <Link href="#" underline="hover" sx={{ color: theme.palette.primary.main }}>
              Termos de Uso
            </Link>
            .
          </Typography>

          <NavLink to="/signup" style={{ textDecoration: 'none', width: '100%' }}>
            <Button
              sx={{
                mt: 2,
                color: theme.palette.text.secondary,
                textTransform: 'none',
              }}
            >
              Já possui uma conta? Entrar
            </Button>
          </NavLink>
        </Box>
      </Paper>
    </Container>
  )
}

