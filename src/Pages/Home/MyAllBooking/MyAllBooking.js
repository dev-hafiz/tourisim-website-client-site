import React from 'react';
import './MyAllBooking.css';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';


const MyAllBooking = () => {

     const {user} = useAuth();
     const [bookingPalces, setBookingPlaces] = useState([])
     
     useEffect( ()=>{
          fetch(`http://localhost:5000/myAllBooking/${user?.email}`)
          .then(res => res.json())
          .then(data => setBookingPlaces(data))
     },[user.email])


     //Delete Method
     const handleDelete = id =>{
          const procced = window.confirm("Are you sure to delete your Place")
          if (procced) {
               
               const url = `http://localhost:5000/myBooking/${id}`
               fetch(url, {
                    method:'DELETE'
               })
               .then(res => res.json())
               .then(data =>{
                    if (data.deletedCount) {
                         alert('Delete Successfully')
                         const remainig = bookingPalces.filter(place => place._id !== id);
                         setBookingPlaces(remainig)
        
                    }
               })
          }
      
     }

     return (
          <div>
               <div className="container my-5">
                 <h2 className="total-text">My Total Booking Place -{bookingPalces.length}</h2>

               <div>
               <Table striped bordered hover>
                    <thead>
                    <tr>
                         <th>List</th>
                         <th>Place</th>
                         <th>Place hints</th>
                         <th>Delete</th>
                    </tr>
                    </thead>
                    {
                         bookingPalces?.map((place, index) =>(
                              
                              <tbody key={place._id}>
                              <tr>
                                   <td>{index}</td>
                                   <td>{place?.title}</td>
                                   <td>{place?.des}</td>
                                   <td onClick={()=> handleDelete(place._id)}><i className="fas fa-trash-alt icon-delete"></i></td>
                              </tr>
                              
                             </tbody>   
                         ) )
                    }
                    </Table>
               </div>
               </div>
          </div>
     );
};

export default MyAllBooking;