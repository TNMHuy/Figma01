import { useContext } from 'react';
import { Navigate} from "react-router-dom";
import { UserContext} from "../utills/loginContext"
import { useSelector } from 'react-redux';

const Protected = ({children}) => {
    // const user = useContext(UserContext)
    const token = useSelector((state)=>state.auth.user.token)
    // console.log(user);

    if (!token){
        return <Navigate to="/" replace />;
    }
  return children;
    
  
}

export default Protected