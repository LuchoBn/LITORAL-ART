import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Litoral Arte
          </RouterLink>
        </Typography>
        
        {currentUser ? (
          <>
            <Button color="inherit" component={RouterLink} to="/dashboard">
              Inicio
            </Button>
            <Button color="inherit" component={RouterLink} to="/dashboard/products">
              Produtos
            </Button>
            <Button color="inherit" component={RouterLink} to="/dashboard/profile">
              Perfil
            </Button>
            <Button color="inherit" component={RouterLink} to="/dashboard/orders">
            Pedidos
            </Button>
            <Button color="inherit" onClick={logout}>
              Sair
            </Button>
          </>
        ) : (
          <Button color="inherit" component={RouterLink} to="/login">
            Iniciar Sessão
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}