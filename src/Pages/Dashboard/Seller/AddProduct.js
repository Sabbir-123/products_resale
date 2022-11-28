import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useToken from '../../../useHooks/useToken';



const AddProduct = () => {
const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [cratedUseremail,setCratedUseremail ]= useState('')
    const [token ] = useToken(cratedUseremail)
    const date = new Date().toLocaleString()
if(token){
    navigate('/')
}

  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
   
  const imagekey = '8cafa7700ddb609a54ab949219ac23a5';

    const handleAddProdut = data =>{
console.log(data)
const img = data.picture[0];
console.log(img)
    const formData = new FormData();
    formData.append('image', img);
    const url = `https://api.imgbb.com/1/upload?key=${imagekey}`
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res=>res.json())
    .then(imageData=> {
        if(imageData.success){
            console.log(imageData.data.url)
        const newProdutct ={
            category_id : data.category_id,
            category_name : data.category_name,
            title: data.title,
            picture: imageData.data.url,
            location: data.location,
            resale_price: data.resale_price,
            buying_price: data.buying_price,
            Year_of_purchase: data.Year_of_purchase,
            Year_of_uses: data.Year_of_uses,
            the_time_it_posted: date,
            Seller_name: data.Seller_name,
            condition: data.condition,
            number_of_seller: data.number_of_seller,
            details: data.details,
            bookingId: data.bookingId,
            email: user.email,
            stock: data.stock

        }

        // save mobiles into mobiles db

        fetch('https://server-assignment-12.vercel.app/mobiles', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(newProdutct)
                
            })
            .then(res=>res.json())
            .then(result => {
                console.log(result)
                if(result.acknowledged){
                    swal('Mobile added')
                    navigate('/')
                }
            })
        
        
        
        }})



    }
    
  
    

       
    return (
        <div className='m-10'>
             <div className='h-1/2 flex justify-center items-center'>
            <div className='w-2/3 lg:w-1/2 p-7 rounded-lg border'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleAddProdut)}>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("title", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Brand</span></label>
                    <select className="input input-bordered w-full "  {...register("category_name")}>
   
                    <option disabled>Choose one of the category</option>
                    <option  value="Xiaomi">Xiaomi</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Apple">Apple</option>
                     </select>
                    </div>
                    <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Category ID:</span></label>
                    <select className="input input-bordered w-full "  {...register("category_id")}>
   
                    <option disabled>Choose one of the category</option>
                    <option  value="01">Xiaomi ID: 1 </option>
                      <option value="02">Samsung ID: 2</option>
                      <option value="03">Apple ID: 3</option>
                     </select>
                    </div>
                    {/* Picture Added to imgbb */}
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Picture</span></label>
                        <input type="file" {...register("picture", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Shop Name</span></label>
                        <input type="text" {...register("Seller_name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Booking ID</span></label>
                        <input type="text" {...register("bookingId", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Stock</span></label>
                        <input type="text" {...register("stock", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Sale Price</span></label>
                        <input type="text" {...register("resale_price", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Buying Price</span></label>
                        <input type="text" {...register("buying_price", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Purchase Year</span></label>
                        <input type="text" {...register("Year_of_purchase", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">How many years you have used?</span></label>
                        <input type="text" {...register("Year_of_uses", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">condition</span></label>
                        <input type="text" {...register("condition", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Number</span></label>
                        <input type="text" {...register("number_of_seller", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-">
                        <label className="label"> <span className="label-text">Details</span></label>
                        <input type="text" {...register("details", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    
                   
                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                </form>

            </div>
        </div>
        </div>
    );
};

export default AddProduct;