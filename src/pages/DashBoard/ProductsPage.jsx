import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nombre', width: 200 },
  { field: 'price', headerName: 'Precio', width: 130 },
  { field: 'stock', headerName: 'Stock', width: 130 },
];

const rows = [
  { id: 1, name: 'Pulsera de hilo', price: 15.99, stock: 24 },
  { id: 2, name: 'Collar de piedras', price: 29.99, stock: 12 },
  // ... más productos
];

export default function ProductsPage() {
  return (
    <Box sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Productos</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Nuevo Producto
        </Button>
      </Box>
      
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
}