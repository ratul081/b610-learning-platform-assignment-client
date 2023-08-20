import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';




const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log("🚀 ~ file: PrivateRoute.js:10 ~ PrivateRoute ~ loading:", loading)
  const location = useLocation()
  if (loading) {
    return <div className='relative h-32 w-full m-24'>
        <span className="absolute inset-0 text-5xl loading loading-spinner loading-lg"></span>
      </div>
    
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
  }
  return children;


};

export default PrivateRoute;