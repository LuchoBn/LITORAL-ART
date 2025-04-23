import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    // Usuario no autenticado - redirigir a login
    return <Navigate to="/login" replace />;
  }

  // Usuario autenticado - mostrar contenido protegido
  return children;
}