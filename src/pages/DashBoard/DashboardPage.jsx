import { useAuth } from '../../context/AuthContext';
import { Button, Typography } from '@mui/material';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Typography variant="h4">Bienvenido, {user?.name}</Typography>
      <Typography variant="body1">Email: {user?.email}</Typography>
      <Button 
        variant="contained" 
        color="error" 
        onClick={logout}
        sx={{ mt: 2 }}
      >
        Cerrar Sesión
      </Button>
    </div>
  );
};

export default DashboardPage;