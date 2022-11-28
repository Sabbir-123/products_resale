import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyBuyers = () => {
    const {data: payemtsuser = [], refetch}= useQuery({
        queryKey: ['payemtsuser'],
        queryFn: async ()=>{
          const res = await fetch('https://server-assignment-12.vercel.app/payemtsuser')
           const data = await res.json();
           return data.slice(0,3);
           
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Buyer Email</th>
        <th>TD ID</th>
      </tr>
    </thead>
    <tbody>
     {
payemtsuser.map((all, i) =><>
 <tr>
        <th>{i+1}</th>
        <td>{all.email}</td>
        <td>{all.transaction}</td>
      </tr>
</>)
     }

     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBuyers;