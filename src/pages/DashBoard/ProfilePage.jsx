import { Box, Typography, Avatar, TextField, Button } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

export default function ProfilePage() {
  const { currentUser } = useAuth();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Mi Perfil
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar 
          src={currentUser?.photoURL} 
          sx={{ width: 100, height: 100, mr: 3 }}
        />
        <Box>
          <Typography variant="h6">{currentUser?.displayName}</Typography>
          <Typography variant="body1">{currentUser?.email}</Typography>
        </Box>
      </Box>
      
      <Box component="form" sx={{ maxWidth: 600 }}>
        <TextField
          fullWidth
          label="Nombre"
          margin="normal"
          defaultValue={currentUser?.displayName}
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          defaultValue={currentUser?.email}
          disabled
        />
        <Button variant="contained" sx={{ mt: 2 }}>
          Guardar Cambios
        </Button>
      </Box>
    </Box>
  );
}