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
  newPassword: Yup.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .required('Campo obrigatório'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'As senhas devem coincidir')
    .required('Campo obrigatório'),
});

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log('Nova senha:', values.newPassword);
        // Aquí iría la lógica para actualizar la contraseña
        navigate('/login');
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Redefinir a senha
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="newPassword"
          name="newPassword"
          label="Senha nova"
          type="password"
          margin="normal"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />

        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar a senha"
          type="password"
          margin="normal"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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