import { useContext } from 'react';
import { Link, Navigate, Outlet} from "react-router-dom";
import { UserContext} from "../utills/loginContext"
import { useSelector } from 'react-redux';

const Protected = () => {
    // const user = useContext(UserContext)
    const token = useSelector((state)=>state.auth.user.token)
    // console.log(user);

    if (!token){
        return <Navigate to="/login" replace />;
    }
  return(
    <>
    <div className=''>
     
      
    </div>
    <Outlet/>;
    </>
    ) 
    
  
}

export default Protected