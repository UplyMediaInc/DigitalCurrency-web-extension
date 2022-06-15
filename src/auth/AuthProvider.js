import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';
import { getUser, addUser } from '../MockAPI';
import { Navigate } from 'react-router-dom'

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const signup = (email, password) => {
      setLoading(true);
      const newUser = addUser(email, password);
      setLoading(false);
      setUser(newUser);
    }

    const login = async(email, password) => {
      setLoading(true);
      const fetchedUser = await getUser();
      fetchedUser !== null && setUser(fetchedUser);
      setLoading(false);
    }
    console.log(user);
    const value = {
      user,
      login,
      signup
    }
  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthProvider