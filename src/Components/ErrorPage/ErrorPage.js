import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Error.css'


const ErrorPage = () => {

    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
          .then(swal("User Logged Out"))
          .catch((error) => swal(error.message));
      };
    
    return (
        <div className='error grid justify-center p-5'>
           <h1 className='text-6xl text-center flex content-center   justify-center'>
           Error 404. Please
          <span> <button onClick={handleLogout}> Log Out </button> </span>
            and Sign In Back
           </h1>
        </div>
    );
};

export default ErrorPage;