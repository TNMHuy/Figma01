import { useContext } from 'react';
import { Navigate} from "react-router-dom";
import { UserContext} from "../utills/loginContext"

const Protected = ({children}) => {
    const user = useContext(UserContext)
    console.log(user);

    if (!user.isLoggedIn){
        return <Navigate to="/" replace />;
    }
  return children;
    
  
}

export default Protected