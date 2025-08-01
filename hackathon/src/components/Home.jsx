import React, { useState } from "react";
import Chatbot from "./Chatbot";
import { FaRegComments } from "react-icons/fa";


import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    console.log(isChatbotOpen);

    setIsChatbotOpen((prev) => !prev)
  }
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}

      <section
        className=" text-white py-20 bg-cover bg-top min-h-[550px] flex flex-wrap justify-center items-center flex-col"
        style={{
          backgroundImage:
            " linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 80, 250, 0.5)),url(./hero.jpg)",
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 animate__animated animate__zoomIn">
            Welcome to Your Mental Health Portal
          </h1>



          <p className="text-xl mb-8">Start improving your mental health and well-being today.  Health First shows you how.</p>
          <button
            className="bg-white text-blue-500 font-semibold py-2 px-6 rounded shadow hover:scale-95 duration-100 ease-in-out"

            onClick={() => { navigate('/login') }}

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

      {/* Chatbot Icon */}
      <div onClick={toggleChatbot}

        className="fixed  bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer"

      >
        <FaRegComments size={30} />
      </div>

      {/* Testimonials */}
      <section className="bg- py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Users Say</h2>
          <blockquote className="italic text-xl text-gray-700 mb-4">
            "This platform has been a lifeline for my mental well-being. The support I received has truly made a difference in my life."
          </blockquote>
          <cite className="text-blue-500 font-semibold">- Arun Jadhav</cite>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Us Section */}
        <div className="bg-gray-200 py-10 px-6 md:px-12 rounded-lg shadow-lg text-center">
          <p className="text-black text-md md:text-2xl leading-relaxed font-serif">
            <span className="font-semibold text-blue-600">About Us</span><br />
            HelpGuide.org is an independent nonprofit that <br />
            runs one of the world’s leading mental health <br />
            websites. Each month, millions of people from <br />
            all around the world turn to us for trustworthy <br />
            information they can use to improve their mental health and make healthy changes.
          </p>
        </div>


        {/* Video Section */}
        <div className="bg-white py-6 px-6 md:px-12 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Watch Our Video</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/nzDljDaQ_v8?autoplay=1" 
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div>{
        isChatbotOpen && <Chatbot/>
      }</div>

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
              <img src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg" alt="" srcSet="" />
              Free Mental Health Counselling
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
