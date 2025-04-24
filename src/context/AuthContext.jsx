import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config'; // (backend)

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para login (auth)
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Función para registro
  function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // Función para logout
  function logout() {
    return auth.signOut();
  }

  // Escuchar cambios en la autenticación
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
/*

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Simula login
  const login = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setCurrentUser({ email, displayName: email.split('@')[0] });
        resolve();
      }, 1000); // Simula delay de rede
    });
  };

  // Simula registro
  const register = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setCurrentUser({ email, displayName: email.split('@')[0] });
        resolve();
      }, 1000);
    });
  };

  // Simula logout
  const logout = () => {
    setCurrentUser(null);
    return Promise.resolve();
  };

  const value = {
    currentUser,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}*/