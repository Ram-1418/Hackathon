import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate("/register"); // Redirect to the registration page
  };
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}

      <section className="bg-blue-500/20 text-white py-20 bg-cover bg-center min-h-[500px] flex flex-wrap justify-center items-center flex-col" style={{
        backgroundImage:"url(./hero.jpg), linear-gradient(rgba(0, 0, 200, 0.8), rgba(0, 0, 0, 0.7))",
        backdropFilter:"blur(2px)"
      }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your Mental Health Portal
          </h1>
          <p className="text-xl mb-8">Your Gateway to Mental Wellness</p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded shadow"
          onClick={handleStartJourney}>
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-3">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Self-Assessment Quizzes
              </h3>
              <p className="mb-4">Identify your mental health needs.</p>
              <button className="text-blue-500 font-semibold">
                Learn More
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Mood Tracking</h3>
              <p className="mb-4">Track your mood over time.</p>
              <button className="text-blue-500 font-semibold">
                Learn More
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Resource Library</h3>
              <p className="mb-4">
                Access a variety of mental health resources.
              </p>
              <button className="text-blue-500 font-semibold">
                Explore Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Users Say</h2>
          <blockquote className="italic text-xl text-gray-700 mb-4">
            "This portal has been a game-changer for my mental health."
          </blockquote>
          <cite className="text-blue-500 font-semibold">- Jane Doe</cite>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
          <p className="text-lg mb-4">
            Contact us at{" "}
            <a
              href="mailto:support@mentalhealthportal.com"
              className="text-blue-500 underline"
            >
              support@mentalhealthportal.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
