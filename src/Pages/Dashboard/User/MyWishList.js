import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import WishDetails from './WishDetails';

const MyWishList = () => {

    const {user} = useContext(AuthContext)
    const url = `https://server-assignment-12.vercel.app/wishlist?email=${user?.email}`;
    const {data: wishlists= []}= useQuery({
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
        <div>
           
<div className=" dark:text-gray-50">
<div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
{
        wishlists.map(perWishlist=><WishDetails perWishlist={perWishlist}  key={perWishlist._id}></WishDetails>
       
        )
    }
</div>

</div>
        </div>
    );
};


export default MyWishList;

