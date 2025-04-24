
import { DataGrid } from '@mui/x-data-grid';  // Fixed package name
import { Box, Typography, Chip } from '@mui/material';  // Fixed package name
const columns = [
  { field: 'id', headerName: 'Orden', width: 100 },
  { field: 'date', headerName: 'Fecha', width: 150 },
  { field: 'customer', headerName: 'Cliente', width: 200 },
  { field: 'amount', headerName: 'Total', width: 120 },
  { 
    field: 'status', 
    headerName: 'Estado', 
    width: 150,
    renderCell: (params) => (
      <Chip 
        label={params.value} 
        color={
          params.value === 'Completado' ? 'success' : 
          params.value === 'Pendiente' ? 'warning' : 'error'
        } 
      />
    )
  },
];

const rows = [
  { id: '#1001', date: '2023-05-15', customer: 'María González', amount: 89.97, status: 'Completado' },
  { id: '#1002', date: '2023-05-16', customer: 'Carlos Silva', amount: 45.50, status: 'Pendiente' },
];

export default function OrdersPage() {
  return (
    <Box sx={{ p: 3, height: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Pedidos Recientes
      </Typography>
      
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Box>
    </Box>
  );
}