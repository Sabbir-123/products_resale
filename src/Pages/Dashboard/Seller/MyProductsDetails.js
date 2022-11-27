import React, { useState } from 'react';
import swal from 'sweetalert';

const MyProductsDetails = ({singleMobile}) => {
    const [loading, setLoading] = useState(true)
const [advertised, setAdvertised ] = useState('')
    const handleAdvertise= ()=>{
        fetch('http://localhost:8000/advertise', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(singleMobile)
            
        })
        .then(res=>res.json())
        .then(result => {
            if(loading){
                setLoading(false)
                console.log(result)
                setAdvertised(result)
                if(result.acknowledged){
                    swal('Mobile has been published to the advertise section')
                }
                else{
                    swal('You already have a advertisement for this item')
                }
            }
          
          
        })
    }
    return (
        <tr>
              <th>{}</th>
              <td><img className='w-24' src={singleMobile.picture} alt="" /></td>
              <td>"{singleMobile.title}"</td>
              <td>{singleMobile.stock} pcs</td>
              <td>
                {
                    !advertised && <button onClick={handleAdvertise} className="btn btn-primary btn-xs">Advertise</button>
                }
                </td>
            </tr>
    );
};

export default MyProductsDetails;

