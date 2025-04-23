import { Box, Grid, Typography, Avatar, Paper } from '@mui/material';
import { useAuth } from '../../context/AuthContext';


import img1 from '../../assets/images/baixada1.jpg';
import img2 from '../../assets/images/baixada2.jpg';
import img3 from '../../assets/images/baixada3.jpg';
import img4 from '../../assets/images/baixada4.jpg';
import logo from '../../assets/images/logo.png';

export default function UserDashboard() {
  const { currentUser } = useAuth();

  const featuredImages = [
    { id: 1, src: img1, title: 'Feira Hippie de Santos' },
    { id: 2, src: img2, title: 'Artesanato Praiano' },
    { id: 3, src: img3, title: 'Cultura Local' },
    { id: 4, src: img4, title: 'Produtos Artesanais' },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Bienvenida con logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar 
          src={logo} 
          sx={{ 
            width: 80, 
            height: 80, 
            mr: 2,
            border: '3px solid #1976d2',
            boxShadow: 3
          }} 
        />
        <Typography variant="h4" component="h1">
          Bem-vindo, {currentUser?.displayName || 'Artista'}!
        </Typography>
      </Box>

      {/* Sección de imágenes destacadas */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
        Feirinhas Hippies da Baixada
      </Typography>
      
      <Grid container spacing={3}>
        {featuredImages.map((image) => (
          <Grid item xs={12} sm={6} md={3} key={image.id}>
            <Paper 
              elevation={3} 
              sx={{ 
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6
                }
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.title}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1" align="center">
                  {image.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Sección "Sobre Nós" */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Sobre Nós
        </Typography>
        <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
          <Typography paragraph>
            O ARTESANATO DE PRAIA DA BAIXADA SANTISTA em um só lugar.
          </Typography>
          <Typography paragraph>
            Conectamos artesãos locais com amantes da cultura hippie e do artesanato
            autêntico da nossa região.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            sx={{ mt: 2 }}
          >
            Saber mais
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}