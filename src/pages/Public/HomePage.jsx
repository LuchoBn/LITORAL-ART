import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      textAlign: 'center', 
      mt: 8,
      backgroundImage: 'url(/background.jpg)',
      backgroundSize: 'cover',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Typography variant="h2" gutterBottom>
        Litoral Arte
      </Typography>
      <Typography variant="h5" gutterBottom>
        O MAR INSPIRA, A ARTE TRANSFORMA
      </Typography>
      <Button 
        variant="contained" 
        size="large"
        onClick={() => navigate('/login')}
        sx={{ mt: 4, mx: 'auto' }}
      >
        Entrar
      </Button>
    </Box>
  );
}