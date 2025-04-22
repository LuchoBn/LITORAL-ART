import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Link 
} from '@mui/material';

const validationSchema = Yup.object({
  emailOrUsername: Yup.string().required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

export default function LoginPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      emailOrUsername: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Aquí iría la lógica de autenticación
        console.log(values);
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
      }
    },
  });

return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
            LOGIN
        </Typography>

        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="emailOrUsername"
                name="emailOrUsername"
                label="E-mail/Nome de usuário"
                margin="normal"
                value={formik.values.emailOrUsername}
                onChange={formik.handleChange}
                error={formik.touched.emailOrUsername && Boolean(formik.errors.emailOrUsername)}
                helperText={formik.touched.emailOrUsername && formik.errors.emailOrUsername}
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
                sx={{ mt: 3, py: 1.5 }}
            >
                Continuar
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

        <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Link 
                href="#" 
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/forgot-password');
                }}
                underline="hover"
            >
                Esqueci a senha
            </Link>
        </Box>
    </Box>
);
}
const styles = {
}