import * as React from 'react';
import { Navigate } from 'react-router-dom';
//import { useAuth } from './AuthProvider';
import { useMoralis } from 'react-moralis';

const RequireAuth = ({ children }) => {
    //const auth = useAuth();
    const { isAuthenticated, user } = useMoralis()
    if(!isAuthenticated){
        return <Navigate to='/comingsoon' replace={true}/>
    }

    return children;
}

export default RequireAuth