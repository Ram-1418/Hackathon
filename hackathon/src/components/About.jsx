import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
function About() {
  const developers = [
    {
      name: "Sonu Shivcharan",
      role: "Backed Developer",
      image: "./shivcharan.jfif"
    },
    {
      name: "Jayesh Pandhare",
      role: "Frontend Developer",
      image: "./jayesh.webp"
    },
    {
      name: "Rameshwar Patil",
      role: "Frontend Developer",
      image: "./ram.png"
    }
  ]
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold text-center mb-8">Skill Academy</h1>
        <h1 className="text-3xl font-bold text-center mb-8 ">
          This Is What We Do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
            <img src="./about-icon2.png" alt="" />
            <p className="text-gray-700">
            <FontAwesomeIcon icon={faUserDoctor} size="3x" color="green" /><br />
              Provide quality mental health services and support by carefully
              vetting and selecting a team of experts<br />
              <br />
              Protocol-Driven<br />
              Emergency System

            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
            <img src="./icon1.png" alt="" />

            <p className="text-gray-700">
            <i className="flaticon-medical-doctor"></i> {/* Icon from Flaticon */}
            <FontAwesomeIcon icon={faAmbulance} size="3x" color="green" /><br />

              Respond and treat every individual with respect and dignity, while
              empowering them to have their own voice and encouraging them to
              participate actively in caring for their own mental peace
              <br />
              <br />
              Step in saving lives <br />
              Ambulance Services

            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
            <img src="./about-icon3.png" alt="" />
            <p className="text-gray-700">
            <FontAwesomeIcon icon={faSyringe} size="3x" color="green" /><br />
              Continually learning, researching and creating more efficient
              methods to reach and serve the community optimally
              <br />
              <br />
              Patient Care <br />
              Easy Payment
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-4 py-8"> <h1 className="text-3xl font-bold text-center mb-8">About us</h1>
        <p className="text-l text-center ">
          The health care Foundation is a non-profit that partners with
          organizations to help communities thrive by providing education and
          healthcare.
        </p>

        <p className="text-l text-center ">
          14 years of supporting those who need mental and emotional counselling,
          we have facilitated 1 million+ conversations to date. Our emergency
          mental health support service is accessible 24 hours a day, 365 days a
          year.
        </p></div>
      <h1 className="text-3xl font-bold text-center mb-8 pt-8">Our Team</h1>
      <div className=" container flex justify-center gap-8 py-9">
        {
          developers.map(({ name, image, role }, idx) => {
            return (
              <div key={name + idx} className="max-w-[250px] bg-white rounded-lg shadow-md p-2 hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border border-sky-500 text-gray-700">
                <img className="rounded-full h-[210px] w-full" src={image} alt="" />
                <p className="text-center p-2 font-bold text-2xl">
                  {name}
                </p>
                <p className=" text-center p-2 font-bold text-lg">
                  {role}
                </p>
              </div>)
          })
        }
      </div>
    </div>
  );
}

export default About;
