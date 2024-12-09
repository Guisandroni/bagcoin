'use client'

import React from 'react'
import { Avatar, Box, Button, Container, Typography, useTheme, useMediaQuery, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Wallet, PieChart, TrendingUp, DollarSign } from 'lucide-react'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)

export function Icon() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }
  }

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <MotionPaper
        elevation={0}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={{
          p: 4,
          borderRadius: 4,
          textAlign: 'center',
          background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
          boxShadow: 'none', // Remove a sombra personalizada
        }}

       
      >
        <MotionBox variants={itemVariants}>
          <Avatar
            sx={{ 
              width: 120, 
              height: 120, 
              margin: '0 auto',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
            src="https://bagcoin.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnzambf4m%2Fimage%2Fupload%2Fv1708987396%2FBagCoin_Blog%2Fbag_shine____hetbmm.gif&w=256&q=75" 
            alt="BagCoin Logo"
          />
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <Typography variant="h3" sx={{ mt: 3, mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}>
            BagCoin
          </Typography>
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <Typography variant="h6" sx={{ mb: 3, color: theme.palette.text.secondary }}>
            Sua Solução Completa para Gestão Financeira
          </Typography>
        </MotionBox>

        <MotionBox 
          variants={itemVariants}
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: 2, 
            mb: 4 
          }}
        >
          {[Wallet, PieChart, TrendingUp, DollarSign].map((Icon, index) => (
            <MotionBox
              key={index}
              variants={iconVariants}
              sx={{
                bgcolor: theme.palette.primary.main,
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon size={24} color="white" />
            </MotionBox>
          ))}
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary }}>
            Controle suas finanças com facilidade. Acompanhe gastos, defina metas, analise investimentos e tome decisões financeiras inteligentes com o BagCoin.
          </Typography>
        </MotionBox>

        <MotionBox variants={itemVariants}>
          <Link to="/login" style={{ textDecoration: 'none', width: '100%' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: theme.palette.primary.main,
                color: 'white',
                textTransform: 'none',
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Começar Agora
            </Button>
          </Link>
        </MotionBox>
      </MotionPaper>
    </Container>
  )
}

