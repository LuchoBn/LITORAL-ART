import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto',
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Litoral Arte - Todos os direitos reservados
      </Typography>
    </Box>
  );
}