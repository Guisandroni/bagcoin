'use client'

import { useState } from 'react'
import { Box, Button, Container, Divider, Link, TextField, Typography } from '@mui/material'
import { Google, Visibility, VisibilityOff } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'


export  function Login() {
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const toggleView = () => setIsLogin(!isLogin)

    
  

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          py: 4,
          
        }}
      >
        {/* Arrow Icon */}
        <Box sx={{ width: '48px', height: '48px', mb: 4 }}>
          
        </Box>

        {/* Title */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'medium' }}>
          {isLogin ? 'Fazer Login' : 'Crie sua conta'}
        </Typography>

        {/* Google Button */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<Google />}
          sx={{
            backgroundColor: 'black',
            color: 'white',
            textTransform: 'none',
            py: 1.5,
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          entrar com o Google
        </Button>

        {!isLogin && (
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: 'black',
              color: 'white',
              textTransform: 'none',
              py: 1.5,
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            continuar com e-mail
          </Button>
        )}

        {isLogin && (
          <>
            <Divider sx={{ width: '100%', my: 2 }}>ou</Divider>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="email"
                placeholder="digite seu email"
                required
                type="email"
                variant="outlined"
              />

              <TextField
                fullWidth
                label="senha"
                placeholder="********"
                required
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <Button
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ minWidth: 'auto', p: 1 }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  ),
                }}
              />

              <Link
                href="#"
                underline="hover"
                sx={{ alignSelf: 'flex-end', color: '#10B981', textDecoration: 'none' }}
              >
                esqueceu a senha? recuperar conta
              </Link>

             <NavLink to='/'>
             <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#10B981',
                  color: 'white',
                  textTransform: 'none',
                  py: 1.5,
                  mt: 2,
                  '&:hover': {
                    backgroundColor: '#059669',
                  },
                }}
              >
                Conectar
              </Button>
             </NavLink>
            </Box>
          </>
        )}

        {!isLogin && (
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Ao continuar, você concorda com nossos{' '}
            <Link href="#" underline="hover" sx={{ color: 'inherit' }}>
              Termos de Uso.
            </Link>
          </Typography>
        )}

        <Button
          onClick={toggleView}
          sx={{
            mt: 2,
            color: 'text.primary',
            textTransform: 'none',
          }}
        >
          {isLogin ? 'Não tem uma conta? Criar conta' : 'Já possui uma conta? Login'}
        </Button>
      </Box>
    </Container>
  )
}

