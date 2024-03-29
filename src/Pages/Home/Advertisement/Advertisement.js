import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Contexts/AuthProvider";
import swal from "sweetalert";
import useSeller from "../../../useHooks/useSeller";

const Advertisement = () => {
  const baseURL = "https://server-assignment-12.vercel.app/advertise";
  const [post, setPost] = React.useState(null);
  const {user } = useContext(AuthContext)
  const date = new Date().toLocaleString()
  const [newBooking, setNewBooking] = useState('')
  const [isSeller]=useSeller(user?.email)

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);



  const handleAdvertiseModal = data =>{
    setNewBooking(data)
    console.log(data)
  }

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const booking = {
        bookingTime: date,
        MobileName : newBooking.title,
        buyer: name,
        email,
        phone,
        price : newBooking.resale_price,
        location,
        newBooking: newBooking.newBooking,
        picture: newBooking.picture
    }


    fetch('https://server-assignment-12.vercel.app/bookings', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data);
       if(data.acknowledged){
        // setMobileBook(null);
        swal('Booking Confirmed')
        // refetch();
       }
       else{
        swal(data.message)
       }
    })
    
    
}

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
 }
 else{
  swal(data.message)
 }
})}






  console.log(post);
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Advertisement</h1>
      <div className="m-16 grid gap-5 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {post?.map((ad,i) => (
          <>
            <div class="flex max-w-md overflow-hidden rounded-lg shadow-lg bg-indigo-800">
              <div class="w-1/3 bg-cover ml-5 my-auto">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                    <img src={ad?.picture} alt="" />
                  </div>
                </div>
              </div>

              <div class="w-2/3 p-4 md:p-4">
                <h1 class="text-2xl font-bold   text-white">
                  {ad?.title}
                </h1>

                <div class="flex justify-between mt-3 item-center">
                  <h1 class="text-lg font-bold text-gray-200 ">
                    Price: {ad?.resale_price}$
                  </h1>
                </div>
                <div class="flex justify-between mt-3 item-center gap-3">
                 { !isSeller && user && <label
                disabled={ad.length === 0}
                htmlFor="booking-modal"
                className="px-1 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                onClick={() => handleAdvertiseModal(ad)}
              >
                Book{" "}

              </label> }

              <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">
                        {ad?.title}
                        </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="date" type="text" defaultValue={date} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled readOnly placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={ad?.resale_price} disabled className="input w-full input-bordered" />
                        <input name="bookingId" type="text" placeholder="Booking ID" defaultValue={Math.random()}  className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                         <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
          {
              !isSeller && user &&  <label
              className="px-1 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
              onClick={() => handleWishlisted(ad)}
            >
             Add to Wishlist{" "}
            </label> 
          }
                 
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Advertisement;
