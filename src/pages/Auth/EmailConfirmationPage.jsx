import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  TextField,
  Link
} from '@mui/material';

export default function EmailConfirmationPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '']);

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    // Auto-focus to next input
    if (value && index < 4) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    console.log('Código enviado:', fullCode);
    // Aquí iría la lógica de verificación
    navigate('/dashboard');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Confirmação de E-mail
      </Typography>
      
      <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
        Digite o código enviado para o e-mail Usuário123@gmail.com
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 4 }}>
          {code.map((digit, index) => (
            <TextField
              key={index}
              id={`code-${index}`}
              type="text"
              inputProps={{ maxLength: 1 }}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              sx={{ width: 50, textAlign: 'center' }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button 
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Button>
          <Button 
            variant="contained" 
            type="submit"
            disabled={code.some(digit => !digit)}
          >
            Continuar
          </Button>
        </Box>
      </form>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Link 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            navigate('/login');
          }}
          underline="hover"
          sx={{ mr: 2 }}
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
        >
          Cadastrar-se
        </Link>
      </Box>
    </Box>
  );
}