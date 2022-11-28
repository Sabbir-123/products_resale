import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ShowReport = () => {
const {user}= useContext(AuthContext)
    const url = `https://server-assignment-12.vercel.app/reports`;
    const {data: reports= [], isLoading }= useQuery({
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
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
reports.map(rep=><>
<div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{rep.MobileName}</h2>
    <p>{rep.report}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Delete</button>
    </div>
  </div>
</div>
</>)
            }
        </div>
    );
};

export default ShowReport;