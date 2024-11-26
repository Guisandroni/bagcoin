import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Icon() {
  return (
    <Container
      maxWidth="sm" // Limita a largura máxima do container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Garante que o conteúdo esteja centralizado na tela
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%', // Garante que o Box ocupe toda a largura disponível
        }}
      >
        <Avatar
          sx={{ width: 100, height: 100, marginBottom: 2 }}
          src="https://bagcoin.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnzambf4m%2Fimage%2Fupload%2Fv1708987396%2FBagCoin_Blog%2Fbag_shine____hetbmm.gif&w=256&q=75" 
          alt="Logo"
        />
        <Typography variant="h3" sx={{ marginBottom: 3 }}>
          BagCoin
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 3 }}>
          Aplicação para Gestão Financeira
        </Typography>

        <Link to="/login" style={{ width: '100%' }}>
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
            Acessar
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
