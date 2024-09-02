import React from "react";

function About() {
  const developers=[
    {
      name:"Sonu Shivcharan",
      role:"Backed Developer",
      image:"./sonu2.webp"
    },
    {
      name:"Jayesh Pandhare",
      role:"Frontend Developer",
      image:"./sonu2.webp"
    },
    {
      name:"Rameshwar Patil",
      role:"Frontend Developer",
      image:"./ram.png"
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
            {/* <h2 className="text-2xl font-bold mb-4">Skill Academy</h2> */}
            <p className="text-gray-700">
              Provide quality mental health services and support by carefully
              vetting and selecting a team of experts
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
            <img src="./icon1.png" alt="" />
            {/* <h2 className="text-2xl font-bold mb-4">Raise Awareness & Build Advocacy</h2> */}
            <p className="text-gray-700">
              Respond and treat every individual with respect and dignity, while
              empowering them to have their own voice and encouraging them to
              participate actively in caring for their own mental peace
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
            <img src="./about-icon3.png" alt="" />
            {/* <h2 className="text-2xl font-bold mb-4">Paid Consultation</h2> */}
            <p className="text-gray-700">
              Continually learning, researching and creating more efficient
              methods to reach and serve the community optimally
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
      {/* our team */}
      <h1 className="text-3xl font-bold text-center mb-8 pt-8">Our Team</h1>
      <div className=" container flex justify-center gap-8 py-9">
        {/* <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:bg-cyan-200 transition duration-200 border-solid border-2 border-sky-500 ">
          <img className="rounded-full h-[200px]" src="./sonu2.webp" alt="" />
          <p className="text-gray-700 text-center p-5 font-bold text-2xl">
            Sonu Shivcharan
          </p>
          <p className="text-gray-700 text-center p-5 font-bold text-xl">
            Backed Developer
          </p>
        </div> */}
        {
          developers.map(function(developer){
            return( 
            <div className="max-w-[250px] bg-white rounded-lg shadow-md p-2 hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border border-sky-500 text-gray-700">
            <img className="rounded-lg w-full" src={developer.image} alt="" />
            <p className="text-center p-2 font-bold text-2xl">
              {developer.name}
            </p>
            <p className=" text-center p-2 font-bold text-lg">
              {developer.role}
            </p>
          </div> )
          })
        }
      </div>
    </div>
  );
}

export default About;
