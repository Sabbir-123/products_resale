import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const url = `http://localhost:8000/bookings?email=${user?.email}`;
    const {data: bookings= [] }= useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url, {
                headers: {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }
    
    })
    return (
        <div className='mx-5'>
            <h1 className='text-3xl'>My Orders</h1>
            

            <div className="overflow-x-auto">
        <table className="table w-full">
          {" "}
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
           {bookings && bookings?.map((booking, i)=> <tr key={booking._id}>
              <th>{i+1}</th>
              <td><img className='w-24' src={booking.picture} alt="" /></td>
              <td>{booking.MobileName}</td>
              <td>{booking.price}</td>
              <td>{
                booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                <button className="btn btn-primary btn-xs">Pay</button>
                </Link>
                }
                {
                   booking.price && booking.paid && <span className="text-md">Paid</span>
           
                }
                </td>
            </tr>
           )}
          </tbody>
        </table>
      </div>

            
        </div>
    );
};

export default MyOrders;