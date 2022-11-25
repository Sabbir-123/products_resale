import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import Cat from "./Cat";

const CategoryDetails = () => {
  const all = useLoaderData();

  
  console.log(all);
  const [mobileBook, setMobileBook] = useState(null);

  return (
    <div className="grid grid-cols-1 m-5 lg:grid-cols-3 md:grid-cols-2 gap-3">
      {all.map((singlecategory) => (
        <Cat
          key={singlecategory._id}
          singlecategory={singlecategory}
          setMobileBook={setMobileBook}
        >
          {" "}
        </Cat>
      ))}

      {mobileBook && (
        <BookingModal
          mobileBook={mobileBook}
          setMobileBook={setMobileBook}
        ></BookingModal>
      )}
    </div>
  );
};

export default CategoryDetails;

//   // const { name: treatmentName, slots, price } = treatment;
//   const datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();
//   const {user }= useContext(AuthContext)

//   const handleBooking = event => {
//       event.preventDefault();
//       const form = event.target;
//       const slot = form.slot.value;
//       const name = form.name.value;
//       const email = form.email.value;
//       const phone = form.phone.value;
//       // [3, 4, 5].map((value, i) => console.log(value))
//       const booking = {
//           bookingTime: datetime,
//           treatment: treatmentName,
//           patient: name,
//           slot,
//           email,
//           phone,
//           price
//       }

//       fetch('http://localhost:2000/bookings', {
//           method: "POST",
//           headers: {
//               'content-type': 'application/json'
//           },
//           body: JSON.stringify(booking)
//       })
//       .then(res => res.json())
//       .then(data=>{
//           console.log(data);
//          if(data.acknowledged){
//           setTreatment(null);
//           toast.success('Booking Confirmed')
//           refetch();
//          }
//          else{
//           toast.error(data.message)
//          }
//       })

//       // TODO: send data to the server
//       // and once data is saved then close the modal
//       // and display success toast
//       console.log(booking);

//   }

//modal

// {/* <>
//             <input type="checkbox" id="booking-modal" className="modal-toggle" />
//             <div className="modal">
//                 <div className="modal-box relative">
//                     <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                     <h3 className="text-lg font-bold">{treatmentName}</h3>
//                     <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
//                         <input type="text" disabled value={date} className="input w-full input-bordered " />
//                         <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
//                         <input name="email" type="email" defaultValue={user?.email} disabled readOnly placeholder="Email Address" className="input w-full input-bordered" />
//                         <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
//                         <br />
//                         <input className='btn btn-accent w-full' type="submit" value="Submit" />
//                     </form>
//                 </div>
//             </div>
//         </> */}
