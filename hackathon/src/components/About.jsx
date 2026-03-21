import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faAmbulance, faSyringe } from "@fortawesome/free-solid-svg-icons";

function About() {
  const developers = [
    {
      name: "Jayesh Pandhare",
      // role: "Backend Developer",
      image: "./jayesh.jpg",
    },
    {
      name: "Sandesha Sawant",
      // role: "Frontend Developer",
      image: "./sandesha.jpg",
    },
    {
      name: "Rameshwar Patil",
      // role: "Frontend Developer",
      image: "./patil.jpg",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* ================= WHAT WE DO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl transition duration-300">
            <FontAwesomeIcon icon={faUserDoctor} size="3x" className="text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Expert Mental Care</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing high-quality mental health services through a carefully
              selected team of experienced professionals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl transition duration-300">
            <FontAwesomeIcon icon={faAmbulance} size="3x" className="text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Emergency Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              24/7 emergency response system ensuring immediate care and
              support when it matters most.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl transition duration-300">
            <FontAwesomeIcon icon={faSyringe} size="3x" className="text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Community Wellness</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Continuous learning and innovation to improve patient care,
              counseling access, and community outreach.
            </p>
          </div>

        </div>
      </div>

      {/* ================= ABOUT US SECTION ================= */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Health Care Foundation is a non-profit organization dedicated to
          improving mental and emotional well-being through education,
          counselling, and accessible healthcare services.
        </p>

        <p className="text-gray-600 leading-relaxed">
          With 14+ years of experience, we have facilitated over 1 million
          conversations. Our emergency mental health support service is
          available 24 hours a day, 365 days a year.
        </p>
      </div>

      {/* ================= TEAM SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {developers.map(({ name, image, role }, idx) => (
            <div
              key={name + idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-2xl transition duration-300"
            >
              <img
                className="rounded-full h-44 w-44 mx-auto object-cover mb-4 border-4 border-teal-500"
                src={image}
                alt={`Photo of ${name}`}
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-500 text-sm mt-1">{role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default About;