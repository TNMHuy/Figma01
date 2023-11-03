
import {  Navigate, Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';

const Protected = () => {
    // const user = useContext(UserContext)
    const token = useSelector((state)=>state.auth.user.accessToken)
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