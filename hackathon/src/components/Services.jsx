import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Services() {
  const navigate = useNavigate();
  const services = [
    { name: "Psychotherapy", img: "psychotherapy.webp" },
    { name: "Couples/Family Counselling", img: "family.jpg" },
    { name: "Queer Affirmative Psychotherapy", img: "queer.jpg" },
    { name: "Psychiatry", img: "psychiatry.jpg" },
    { name: "Art Therapy", img: "art.webp" },
    { name: "Psychometric", img: "psychometric.webp" },
    { name: "Neuropsychological Assessment", img: "neuro.webp" },
    { name: "Supervision & Training", img: "training.jpg" },
  ];
  const handleBookAppointment = () => {
    // Handle the booking logic here
    console.log("Appointment booked!");

    navigate("/appointments")
  };
  return (
    <div className="pt-[80px]">
      <h2 className="text-center text-2xl font-bold">Services</h2>
      <div className="container w-full mt-10 flex flex-wrap justify-center items-center gap-5 pt-10">
        {/*  */}
        {services.map((service, idx) => {
          return (
            <div key={idx+service.name} className="service-card max-w-[170px] shadow md:max-w-[250px] lg:min-w-[350px] rounded-lg overflow-hidden">
              <div className="img-container">
                <img
                  className=" max-h-[250px] w-full bg-gray-300"
                  src={service.img}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600"></p>
                <button className="mx-auto bg-blue-500 hover:bg-blue-700  opacity-75 text-white font-bold py-2 px-4 rounded" onClick={handleBookAppointment}>
                Book Appointment
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
