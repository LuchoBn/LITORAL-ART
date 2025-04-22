import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, Pinterest } from '@mui/icons-material';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundImage: 'url(/auth.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 2,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0
        }
      }}
    >
      {/* Redes sociais*/}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 2,
          display: 'flex',
          gap: 1
        }}
      >
        <IconButton aria-label="Facebook" sx={{ color: 'white', '&:hover': { color: '#4267B2' } }}>
          <Facebook fontSize="medium" />
        </IconButton>
        <IconButton aria-label="Instagram" sx={{ color: 'white', '&:hover': { color: '#E1306C' } }}>
          <Instagram fontSize="medium" />
        </IconButton>
        <IconButton aria-label="Twitter" sx={{ color: 'white', '&:hover': { color: '#1DA1F2' } }}>
          <Twitter fontSize="medium" />
        </IconButton>
        <IconButton aria-label="Pinterest" sx={{ color: 'white', '&:hover': { color: '#E60023' } }}>
          <Pinterest fontSize="medium" />
        </IconButton>
      </Box>

      
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <Box 
          component="img"
          src="/logo.png"
          alt="Logo"
          sx={{
            width: { xs: '100px', md: '150px' },
            height: 'auto',
            mb: 3,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
          }}
        />
        {/* Título */}
        <Box sx={{ mb: 2 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '3.5rem', md: '4.5rem' },
              letterSpacing: '4px',
              lineHeight: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            LITORAL
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '3rem', md: '4rem' },
              letterSpacing: '3px',
              lineHeight: 1.2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            ARTE
          </Typography>
        </Box>

        {/* Lema */}
        <Typography 
          variant="h5" 
          sx={{ 
            fontStyle: 'italic',
            mb: 6,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}
        >
          O MAR INSPIRA, A ARTE TRANSFORMA
        </Typography>
        
        {/* ENTRAR */}
        <Button 
          variant="contained" 
          size="large"
          onClick={() => navigate('/login')}
          sx={{ 
            px: 6, 
            py: 2,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: '#1a237e',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'translateY(-2px)'
            },
            transition: 'transform 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          ENTRAR
        </Button>
      </Container>
    </Box>
  );
}