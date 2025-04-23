/*import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  Box, 
  TextField, 
  Button, 
  Typography,
  MenuItem,
  Grid
} from '@mui/material';
import AuthLayout from '../../components/Layout/AuthLayout';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  firstName: Yup.string().required('Campo obrigatório'),
  lastName: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  userType: Yup.string().required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem coincidir')
    .required('Campo obrigatório')
});

const cities = ['Santos', 'Itanhaém', 'São Vicente', 'Peruíbe'];
const userTypes = [
  { value: 'seller', label: 'Vendedor' },
  { value: 'buyer', label: 'Cliente' },
];

export default function RegisterPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      city: '',
      userType: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        navigate('/confirm-email', { 
          state: { 
            email: values.email 
          } 
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <AuthLayout>
      // Logo 
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

      <Typography variant="h4" gutterBottom sx={{ 
        fontWeight: 'bold', 
        mb: 4, 
        textAlign: 'center',
        color: 'white'
      }}>
        CRIAR CONTA
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          // Linha 1: Email e Primeiro Nome 
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="Primeiro nome"
              variant="outlined"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
          </Grid>

          // Linha 2: Sobrenome, Cidade e Tipo de Usuário 
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Sobrenome"
              variant="outlined"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <TextField
              select
              fullWidth
              id="city"
              name="city"
              label="Cidade"
              variant="outlined"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            >
              {cities.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <TextField
              select
              fullWidth
              id="userType"
              name="userType"
              label="Tipo de Usuário"
              variant="outlined"
              value={formik.values.userType}
              onChange={formik.handleChange}
              error={formik.touched.userType && Boolean(formik.errors.userType)}
              helperText={formik.touched.userType && formik.errors.userType}
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            >
              {userTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          // Linha 3: Senha e Confirmação 
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Senha"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirmar senha"
              type="password"
              variant="outlined"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
          </Grid>
        </Grid>

        // Botões 
        <Box sx={{ 
          mt: 4, 
          display: 'flex', 
          justifyContent: 'space-between',
          gap: 2
        }}>
          <Button 
            variant="outlined"
            onClick={() => navigate('/login')}
            sx={{
              flex: 1,
              py: 2,
              borderRadius: '20px',
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: '#e0e0e0',
                color: '#e0e0e0'
              }
            }}
          >
            Fazer Login
          </Button>
          <Button 
            variant="contained"
            type="submit"
            sx={{
              flex: 1,
              py: 2,
              borderRadius: '20px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#1a237e',
              '&:hover': { 
                backgroundColor: '#f5f5f5',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            CADASTRAR
          </Button>
        </Box>
      </form>
    </AuthLayout>
  );
}*/

// src/pages/Auth/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Link,
  Alert
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
});

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setError('');
        setLoading(true);
        await login(values.email, values.password);
        navigate('/dashboard');
      } catch (error) {
        setError('Credenciais inválidas');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        LOGIN
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Senha"
          type="password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button 
          fullWidth 
          variant="contained" 
          type="submit"
          disabled={loading}
          sx={{ 
            mt: 3, 
            py: 1.5,
            '&:disabled': {
              backgroundColor: '#e0e0e0'
            }
          }}
        >
          {loading ? 'Carregando...' : 'Continuar'}
        </Button>
      </form>

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="body2">
          Não possui uma conta ainda?
        </Typography>
        <Link 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            navigate('/register');
          }}
          underline="hover"
          sx={{ mt: 1, display: 'inline-block' }}
        >
          Cadastrar-se
        </Link>
      </Box>
    </Box>
  );
}