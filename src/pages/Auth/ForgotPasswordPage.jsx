import { Button, Typography, TextField } from '@mui/material';
import AuthLayout from '../../components/Layout/AuthLayout';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      {/* Logo */}
      <Box 
        component="img"
        src="/logo.png"
        alt="Logo"
        sx={{
          width: { xs: '100px', md: '150px' },
          height: 'auto',
          mb: 4,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
        }}
      />

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        RECUPERAR SENHA
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Digite seu e-mail para receber as instruções de recuperação
      </Typography>

      <TextField
        fullWidth
        label="E-mail"
        variant="outlined"
        sx={{ mb: 4, backgroundColor: 'rgba(255,255,255,0.9)' }}
      />

      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{
          py: 2,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          backgroundColor: 'white',
          color: '#1a237e',
          '&:hover': { backgroundColor: '#f5f5f5' }
        }}
      >
        ENVIAR INSTRUÇÕES
      </Button>
    </AuthLayout>
  );
}