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
      <button>
        <Link to='/admin'> admin</Link>
      </button>
      <button>
      <Link to='/admin/addpost'> add post</Link>

      </button>
    </div>
    <Outlet/>;
    </>
    ) 
    
  
}

export default Protected