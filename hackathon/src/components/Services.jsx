import React, { useState } from "react";

function Services() {
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
  return (
    <div>

    <h2 className="text-center text-2xl ">Services</h2>
      <div className="container w-full mt-10 flex flex-wrap justify-center items-center gap-5">
        {/*  */}
        {services.map((service) => {
          return (
            <div className="service-card max-w-[170px] shadow md:max-w-[250px] lg:min-w-[350px] rounded-lg overflow-hidden">
              <div className="img-container">
                <img
                  className="min-h-[200px] max-h-[200px] w-full bg-gray-300"
                  src={service.img}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600">
                </p>
                <button className="mx-auto">info</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
