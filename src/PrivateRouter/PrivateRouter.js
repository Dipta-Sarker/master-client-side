import React, { Children, useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authContex } from '../Contexs/Contexs';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRouter = (props) => {

    const location = useLocation()
      const checkoutPage = props.children;
    
    const {user,loadding} = useContext(authContex)

    if(loadding){
        return <div className='text-center mt-5'><Spinner animation="border" variant="success" /></div>
    }

    if(user){
        return checkoutPage;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRouter;