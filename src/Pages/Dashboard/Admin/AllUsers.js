import { useQuery } from '@tanstack/react-query';
import React from 'react';
import swal from 'sweetalert';


const AllUsers = () => {
    const {data: users = [], refetch}= useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://server-assignment-12.vercel.app/users')
            const data = await res.json()
            return data
        }
    })

    const handleAdmin=(id)=>{
        fetch(`https://server-assignment-12.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                swal("Admin Make Succeessful")
                refetch()
            }
        })

    }



    const handleUser= user=>{
        console.log(user);
        fetch(`https://server-assignment-12.vercel.app/users/${user}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            if(data.deletedCount>0){
                refetch()
                swal('Deleted Successfully')
                
            }
        })
    }
    return (
        <div>
            <h2 className="text-4xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>SN</th>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {users.map((user, i)=> 
     <tr key={user._id}>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user?.role}</td>
        <td>{user.email}</td>
        <td>{user?.role!=='admin' && <button onClick={()=>handleUser(user._id)} className='btn btn-secondary btn-xs'>Delete</button>}</td>
      </tr>
      )}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;