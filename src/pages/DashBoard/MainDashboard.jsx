import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

export default function MainDashboard() {
  const { currentUser } = useAuth();

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido, {currentUser?.displayName || 'Usuario'}
      </Typography>
      
      <Grid container spacing={3}>
        {/* Resumen Rápido */}
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Productos</Typography>
              <Typography variant="h4">24</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Ventas</Typography>
              <Typography variant="h4">$3,450</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Clientes</Typography>
              <Typography variant="h4">56</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pedidos</Typography>
              <Typography variant="h4">12</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Gráficos y más contenido... */}
      </Grid>
    </Box>
  );
}