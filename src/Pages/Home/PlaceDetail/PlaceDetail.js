import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./PlaceDetail.css";
import useAuth from "../../../hooks/useAuth";

const PlaceDetail = () => {
  const { user } = useAuth();
  const { detailId } = useParams();
  //loaddata with id
  const [place, setPlace] = useState({});
  useEffect(() => {
    fetch(
      `https://tourisim-website-server-site.onrender.com/places/${detailId}`
    )
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, []);

  //Hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("https://tourisim-website-server-site.onrender.com/placeBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your Booking Successfully");
          reset();
        }
      });
  };

  // img, title , des

  return (
    <div className="my-5">
      <div className="container placeBooking-tour">
        <div>
          <h2 className="place-heading">Place Your Booking </h2>
          <p className="text-center">
            If you want to Place Booking <b>Please click on 3 input filed</b>{" "}
            and then Click Place Booking Button
          </p>
        </div>
        <div className="booking-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={place.title}
              {...register("title")}
              placeholder="title"
            />
            <textarea
              defaultValue={place.des}
              {...register("des")}
              placeholder="description"
            />
            <input
              defaultValue={place.img}
              {...register("img")}
              placeholder="imgUrl"
            />
            <input
              className="booking-Btn"
              type="submit"
              value="Place Booking"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
