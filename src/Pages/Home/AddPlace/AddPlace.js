import React from 'react';
import { useForm } from "react-hook-form";
import './AddPlace.css';

const AddPlace = () => {
     //hook form
     const { register, handleSubmit , reset} = useForm();
     const onSubmit = data =>{
          console.log(data)
          fetch(`https://mysterious-crag-17266.herokuapp.com/places`,{
               method:"POST",
               headers:{
                    "content-type" : "application/json"
               },
               body: JSON.stringify(data)
          })
          .then( res => res.json())
          .then( data =>{
               if (data.insertedId) {
                    alert('Add your Place Successfully');
                    reset();
               }
          })
     };
     return (
          <div>
               <div className="container">
                    <h2 className="add-title">Add Your favorite Place</h2>
               </div>

               <div className="booking-form add-Place">
                  
                   <form onSubmit={handleSubmit(onSubmit)}>
                         <input  {...register("title")} placeholder="title" />
                         <textarea  {...register("des")} placeholder="description" />
                         <input   {...register("img")} placeholder="imgUrl" />
                         <input  className="booking-Btn" type="submit" value="Place Booking" />
                    </form>
                   </div>
          </div>
     );
};

export default AddPlace;