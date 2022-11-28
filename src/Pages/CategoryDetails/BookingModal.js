import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import swal from 'sweetalert';

const BookingModal = ({singlecategory, mobileBook, setMobileBook}) => {
    const {picture,title,Seller_name,category_name,location,resale_price,buying_price, Year_of_purchase, Year_of_uses, the_time_it_posted,Verified, condition,number_of_seller,  details, bookingId }= mobileBook;
    const {user }= useContext(AuthContext);
    const date = new Date().toLocaleString()
    console.log(date)
    console.log(date)

    // const {title}= mobileBook;
console.log(mobileBook)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            bookingTime: date,
            MobileName : title,
            buyer: name,
            email,
            phone,
            price : resale_price,
            location,
            bookingId,
            picture
        }
  
        fetch('http://localhost:8000/bookings', {
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
            setMobileBook(null);
            swal('Booking Confirmed')
            // refetch();
           }
           else{
            swal(data.message)
           }
        })
        
    }
  
    return (
        <div>
            <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">
                        {title}
                        </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="date" type="text" defaultValue={date} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled readOnly placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={resale_price} disabled className="input w-full input-bordered" />
                        <input name="number" type="text" placeholder="Booking ID" defaultValue={bookingId} disabled className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                         <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
        </div>
    );
};

export default BookingModal;