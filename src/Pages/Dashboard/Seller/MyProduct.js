import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyProductsDetails from './MyProductsDetails';

const MyProduct = () => {
    const {user} = useContext(AuthContext)
    const url = `https://server-assignment-12.vercel.app/addedbyseller?email=${user?.email}`;
    const {data: mobiles= [] }= useQuery({
        queryKey: ['mobiles', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url, {
                headers: {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
           
            return data;
        }
    
    })
    


  

    return (
        <div>
            <h1 className='text-4xl'>My Product</h1>
            <div className='mx-5'>

            <div className="overflow-x-auto">

            <table className="table w-full">
          {" "}
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Title</th>
              <th>Stock</th>
              <th>Available</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
          {
            mobiles.map(singleMobile=> <MyProductsDetails singleMobile={singleMobile}></MyProductsDetails>)
        }
          </tbody>
        </table>
        
      </div>

            
        </div>

        </div>
    );
};

export default MyProduct;