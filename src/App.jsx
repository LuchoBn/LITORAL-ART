import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/Public/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordPage';


// Componentes do Dashboard (protegidos)
import MainDashboard from './pages/Dashboard/MainDashboard';
import ProfilePage from './pages/Dashboard/ProfilePage';
import ProductsPage from './pages/Dashboard/ProductsPage';
import OrdersPage from './pages/Dashboard/OrdersPage';
import CustomersPage from './pages/Dashboard/CustomersPage';
import SettingsPage from './pages/Dashboard/SettingsPage';

// Componente de Rota Privada
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Supondo que useAuth está disponível no AuthProvider
  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/recuperar-senha" element={<ForgotPasswordPage />} />

          {/* Rotas Protegidas do Dashboard */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <MainDashboard />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/perfil" element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/produtos" element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/pedidos" element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/clientes" element={
            <PrivateRoute>
              <CustomersPage />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/configuracoes" element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          } />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;