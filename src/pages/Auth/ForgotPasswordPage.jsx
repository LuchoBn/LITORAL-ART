import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  TextField, 
  Button, 
  Typography 
} from '@mui/material';

const validationSchema = Yup.object({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log('E-mail para recuperação:', values.email);
        // Aquí iría la lógica para enviar el e-mail de recuperación
        navigate('/reset-password');
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Esqueceu a senha?
      </Typography>

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
          >
            Continuar
          </Button>
        </Box>
      </form>
    </Box>
  );
}