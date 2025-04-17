import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Link,
  MenuItem,
  Grid
} from '@mui/material';

const validationSchema = Yup.object({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  firstName: Yup.string().required('Campo obrigatório'),
  lastName: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  userType: Yup.string().required('Campo obrigatório'),
});

const cities = [
  'Santos',
  'Cliente',
  'Itanhaém',
  'Ipanema',
  'São Vicente',
  'Peruíbe',
  // ... outras cidades
];

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
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        navigate('/confirm-email');
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        CADASTRO
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="Primeiro nome"
              margin="normal"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Sobrenome"
              margin="normal"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              id="city"
              name="city"
              label="Cidade"
              margin="normal"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            >
              {cities.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              id="userType"
              name="userType"
              label="Tipo de Usuário"
              margin="normal"
              value={formik.values.userType}
              onChange={formik.handleChange}
              error={formik.touched.userType && Boolean(formik.errors.userType)}
              helperText={formik.touched.userType && formik.errors.userType}
            >
              {userTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button 
            variant="outlined"
            onClick={() => navigate('/login')}
          >
            Fazer Login
          </Button>
          <Button 
            variant="contained" 
            type="submit"
          >
            Cadastrar-se
          </Button>
        </Box>
      </form>
    </Box>
  );
}