import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button,
  TextField,
  Link
} from '@mui/material';
import AuthLayout from '../../components/Layout/AuthLayout';

export default function EmailConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState(['', '', '', '', '']);
  
  
  const userEmail = location.state?.email;

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    if (value && index < 4) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    console.log('Código enviado:', fullCode);
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <Box sx={{ maxWidth: 400, mx: 'auto' }}>
        <Typography variant="h5" component="h1" gutterBottom textAlign="center" sx={{ mb: 4 }}>
          Confirmação de E-mail
        </Typography>
        
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          Digite o código enviado para o e-mail {userEmail}
        </Typography>

       
        <form onSubmit={handleSubmit}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 1, 
            mb: 4 
          }}>
            {code.map((digit, index) => (
              <TextField
                key={index}
                id={`code-${index}`}
                type="text"
                inputProps={{ 
                  maxLength: 1,
                  style: { 
                    textAlign: 'center',
                    fontSize: '1.5rem'
                  } 
                }}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                sx={{ 
                  width: 50,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                  }
                }}
              />
            ))}
          </Box>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            mt: 4,
            mb: 4
          }}>
            <Button 
              variant="outlined"
              onClick={() => navigate(-1)}
              sx={{
                px: 4,
                borderRadius: '20px',
                color: 'white',
                borderColor: 'white'
              }}
            >
              Voltar
            </Button>
            <Button 
              variant="contained"
              type="submit"
              disabled={code.some(digit => !digit)}
              sx={{
                px: 4,
                borderRadius: '20px',
                fontWeight: 'bold',
                backgroundColor: 'white',
                color: '#1a237e',
                '&:hover': { backgroundColor: '#f5f5f5' }
              }}
            >
              Continuar
            </Button>
          </Box>
        </form>

        <Box sx={{ 
          textAlign: 'center', 
          mt: 4,
          borderTop: '1px solid rgba(255,255,255,0.2)',
          pt: 2
        }}>
          <Link 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
            underline="hover"
            sx={{ 
              color: 'white',
              mr: 2 
            }}
          >
            Fazer Login
          </Link>
          <Link 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/register');
            }}
            underline="hover"
            sx={{ color: 'white' }}
          >
            Cadastrar-se
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
}