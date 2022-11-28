import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const WishDetails = ({ perWishlist }) => {
const [wish, setWish] = useState('')
  const handleWishtoOrder=data=>{
    console.log(data)

    fetch('https://server-assignment-12.vercel.app/bookings', {
      method: "POST",
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data=>{
      console.log(data);
      setWish(data)
      console.log(wish)
     if(data.acknowledged){
      swal('Booking Confirmed')
     }
     else{
      swal(data.message)
     }
  })
  }    
  console.log(perWishlist);
  const { _id,price, email, MobileName, picture } = perWishlist;
  return (
    <div class="flex w-full flex-col items-center justify-center max-w-sm mx-auto">
      <div class="h-64  w-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
        <img className="rounded p-5" src={picture} alt="" />
      </div>
      <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {MobileName}
        </h3>

        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span class="font-bold text-gray-800 dark:text-gray-200">
            {price}
          </span>
          {!wish && <button onClick={()=>handleWishtoOrder(perWishlist)} class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
            Buy
          </button>
          
          }
          {
            wish && <p>Ordered</p>
          }
        </div>
      </div>
    </div>
  );
};

export default WishDetails;
