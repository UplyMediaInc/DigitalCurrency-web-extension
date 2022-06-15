import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const RequireAuth = ({ children }) => {
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to='/login' replace={true}/>
    }

    return children;
}

export default RequireAuth