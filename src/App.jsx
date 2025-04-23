import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/Public/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
//import EmailConfirmationPage from './pages/Auth/EmailConfirmationPage';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordPage';
//import ResetPasswordPage from './pages/Auth/ResetPasswordPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Rutas Protegidas del Dashboard */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <MainDashboard />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/profile" element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/products" element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/orders" element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/customers" element={
            <PrivateRoute>
              <CustomersPage />
            </PrivateRoute>
          } />
          
          <Route path="/dashboard/settings" element={
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