import React, { useState } from 'react';
import swal from 'sweetalert';

const MyProductsDetails = ({singleMobile}) => {
const [advertised, setAdvertised ] = useState('')
    const handleAdvertise= ()=>{
        fetch('https://server-assignment-12.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(singleMobile)
            
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result)
            setAdvertised(result)
            console.log(advertised)
            if(result.acknowledged){
                swal('Mobile has been published to the advertise section')
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
                {singleMobile.stock === 0 &&  <p>Sold</p>}
                {singleMobile.stock >0 &&  <p>Avaialble</p>}
              
              </td>
              <td>
                {
                    !advertised && <button onClick={handleAdvertise} className="btn btn-primary btn-xs">Advertise</button>
                }
                {
                    advertised && <p>Advertised</p>
                }
                </td>
            </tr>
    );
};

export default MyProductsDetails;

