import React, { useContext, useState} from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Contexts/AuthProvider";
import useSeller from "../../useHooks/useSeller";

const Cat = ({ singlecategory , setMobileBook}) => {
  const [wishlist, setWishList] = useState('');
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)
    const date = new Date().toLocaleString()

  const {
    picture,
    title,
    Seller_name,
    category_name,
    location,
    resale_price,
    buying_price,
    Year_of_purchase,
    Year_of_uses,
    the_time_it_posted,
    condition,
    number_of_seller,
    details,
    bookingId
  } = singlecategory;

  const handleWishlisted = data =>{
    const wishlist = {
      wishlistedTime: date,
      MobileName : data.title,
      buyer: user?.displayName,
      email: user?.email,
      price : data.resale_price,
      wishlistedID: data.bookindId,
      picture: data.picture
    
    
  }
  
  fetch('https://server-assignment-12.vercel.app/wishlist', {
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(wishlist)
  })
  .then(res => res.json())
  .then(data=>{
    console.log(data);
   if(data.acknowledged){

    swal('Wishlisted Confirmed')
    // refetch();
   }
   else{
    swal(data.message)
   }
  })

}


  // const handleReport=data=>{
  //   const report ={
  //     MobileName : data.title,
  //     Report : 'This is fake'
  //   }

  //   fetch('https://localhost:8000/report', {
  //     method: "POST",
  //     headers: {
  //         'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(report)
  //   })
  //   .then(res => res.json())
  //   .then(data=>{
  //     console.log(data);
  //    if(data.acknowledged){
  
  //     swal('Reported Confirmed')
  //     // refetch();
  //    }
  //    else{
  //     swal(data.message)
  //    }
  //   })
    
  // }

  return (
    <div>
      <div key={singlecategory._id}>
        <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            class="object-cover object-center w-full h-56"
            src={picture}
            alt="avatar"
          />

          <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg
              aria-label="headphones icon"
              class="w-6 h-6 text-white fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
              />
            </svg>

            <h1 class="mx-3 text-lg font-semibold text-white">{title}</h1>
          </div>

          <div class="px-6 py-4">
            <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
              Seller: {Seller_name}
            </h1>

            <p class="py-2 text-gray-700 dark:text-gray-400">{details}</p>

            <div class="items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1>Category: {category_name}</h1>
              <h1>Condition: {condition}</h1>
              <h1>Buying Price: {buying_price}</h1>
              <h1>Sale Price: {resale_price}</h1>
              <h1>Posted Time: {the_time_it_posted}</h1>
              <h1>Year of Purchase: {Year_of_purchase} </h1>
              <h1>Uses: {Year_of_uses} </h1>
              <h1>Address: {location} </h1>
              <h1>Number: {number_of_seller} </h1>
              <h1>Seller: {singlecategory?.Verified} </h1>
              <h1>BookingId: {bookingId} </h1>
              <div>
               {
                !isSeller &&  <label
                disabled={singlecategory.length === 0}
                htmlFor="booking-modal"
                className="btn btn-primary text-white"
                onClick={() => setMobileBook(singlecategory)}
              >
                Book{" "}
              </label> 
               }
               {
                !isSeller &&  <label
                disabled={singlecategory.length === 0}
                htmlFor="booking-modal"
                className="btn btn-primary ml-2 text-white"
                onClick={() => handleWishlisted(singlecategory)}
              >
                Add To Wish{" "}
              </label> 
               }
               {
                !isSeller &&  <label
                disabled={singlecategory.length === 0}
                htmlFor="booking-modal"
                className="btn btn-primary ml-2 text-white"
                // onClick={() => handleReport(singlecategory)}
              >
                Report{" "}
              </label> 
               }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
