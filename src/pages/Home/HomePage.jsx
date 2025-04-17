import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';

export default function HomePage() {
  const navigate = useNavigate(); //use navigate, funçao pra atravesar telas

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Litoral Arte
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        © MAR RÓPRA, A ARTE TRANSFORMA
      </Typography>
       
      <Box sx={{ mt: 4 }}>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => navigate('/login')} //rota apos *click // usando funçao "useNavigate"
          sx={{ px: 6, py: 2 }}
        >
          Entrar
        </Button>
      </Box>
    </Container>
  );
}