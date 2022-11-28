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
            <table>
                
            </table>
        </div>
    );
};

export default MyBuyers;