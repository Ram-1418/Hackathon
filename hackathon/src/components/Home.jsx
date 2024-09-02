import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}

      <section
        className=" text-white py-20 bg-cover bg-center min-h-[500px] flex flex-wrap justify-center items-center flex-col"
        style={{
          backgroundImage:
            " linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 80, 250, 0.5)),url(./hero.jpg)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your Mental Health Portal
          </h1>
          <p className="text-xl mb-8">Your Gateway to Mental Wellness</p>
          <button
            className="bg-white text-blue-500 font-semibold py-2 px-6 rounded shadow hover:scale-95 duration-100 ease-in-out"

            onClick={()=>{navigate('/login')}}

          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-3">

          <h2 className="text-3xl font-bold text-center mb-8">
            What We Offer <b />
            <p className="text-2xl text-center mb-8">
              We provide free mental health support and psychological
              counselling to all those who need it. You can call or WhatsApp
              from anywhere in India at any hour of the day or night.
            </p>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
              <img
                className="h-[60px] w-[60px] rounded-full "
                src="./quiz.png"
                alt=""
              />

              <h3 className="text-2xl font-bold mb-4">
                Self-Assessment Quizzes
              </h3>
              <p className="mb-4">
                Are online tools that help you gain insights into your
                personality, skills, values, and preferences. By answering a
                series of questions, you can identify your strengths,
                weaknesses, and potential areas for growth.
              </p>
              <button
                className="text-blue-500 font-semibold"
     

              >
                Learn More
              </button>
            </div>
            <div className="bg-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
              <img src="./hourglass 1.png" alt="" />
              <h3 className="text-2xl font-bold mb-4 ">
                Free 24 X 7 X 365 Mental Health Support
              </h3>
              <p className="mb-4">
                Free mental health support service is available 24X7X365 days.
                Don’t hesitate to reach out to us. A single conversation may
                help you feel much better..
              </p>
              <button className="text-blue-500 font-semibold">
                Learn More
              </button>
            </div>
            <div className="bg-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
              <img
                className="h-[60px] w-[60px] rounded-full "
                src="./Libiry1.png"
                alt=""
              />
              <h3 className="text-2xl font-bold mb-4">Resource Library</h3>
              <p className="mb-4">
                A comprehensive online library offering a wide range of
                resources and tools to support individuals seeking mental health
                information and assistance.
              </p>
              <button className="text-blue-500 font-semibold">
                Explore Resources
              </button>
            </div>
            <div className="bg-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
              <img src="./group 1.png" alt="" />
              <h3 className="text-2xl font-bold mb-4">Skill Academy</h3>
              <p className="mb-4">
                Employees and Volunteers, most of who have a background in
                Psychology, are trained by experienced and licensed mental
                health professionals. It is compulsory for all our Employees and
                Volunteers to sit through an extensive virtual training session.
                This training equips them to manage crisis conversations
                effectively.
              </p>
              <button
                className="text-blue-500 font-semibold"
              >
                Learn More
              </button>
            </div>
            <div className="bg-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-500 transition duration-200 border-solid border-2 border-sky-500">
              <img src="./support 1.png" alt="" />
              <h3 className="text-2xl font-bold mb-4">
                Raise Awareness & Build Advocacy
              </h3>
              <p className="mb-4">
                Stigma keeps people from addressing mental health issues. We
                work with governments, educational institutions, civil society
                and media to combat the bias and build support for mental health
                counselling and interventions.
              </p>
              <button
                className="text-blue-500 font-semibold"
              >
                Learn More
              </button>
            </div>
            <div className="bg-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-500 transition duration-200 drop-shadow-2xl border-solid border-2 border-sky-500">
              <img src="./group 1.png" alt="" />
              <h3 className="text-2xl font-bold mb-4">Paid Consultation</h3>
              <p className="mb-4">
                Opt for one or more rounds of paid video/telephonic
                consultations/therapy sessions with our expert counsellors of
                your choice to deal with mental health concerns that need
                extensive, continuous support.
              </p>
              <button
                className="text-blue-500 font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg- py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Users Say</h2>
          <blockquote className="italic text-xl text-gray-700 mb-4">
            "This portal has been a game-changer for my mental health."
          </blockquote>
          <cite className="text-blue-500 font-semibold">- Jane Doe</cite>
        </div>
      </section>

      {/* Contact Section */}
     
      <div className="container mx-auto py-8 w-full">
        <div className="flex justify-center items-center flex-wrap bg-[#0c96f8] text-white rounded-lg p-8 m-4">
          <img
            src="./help.gif"
            alt="Person feeling overwhelmed"
            className="h-[100px] w-[100px] rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
            <p className="text-lg">
              Reach out to our crisis intervention helpline for free mental
              health support. Available 24 x 7 x 365.
            </p>
          </div>
          <div className="p-4 m-2 bg-white text-gray-800 font-bold text-center rounded-md hover:scale-105 duration-100 ease-in-out">
            <a
              href="whatsapp://send?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
            >
             <img src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg" alt="" srcSet=""  />
              Free Mental Health Counselling
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
