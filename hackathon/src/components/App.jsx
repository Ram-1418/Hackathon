import React from 'react';
 // Import the CSS file for styling

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">How We Can Help</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Free 24 X 7 X 365 Mental Health Support</h2>
          <p className="text-gray-700">
            Free mental health support service is available 24X7X365 days. Don't hesitate to reach out to us. A single conversation may help you feel much better.
          </p>
          <div className="flex justify-center mt-4">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h4m-4 0v4m0-4h4m-4 0V8m0 0l3 3m-3-3l3 3"></path></svg>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Paid Consultation</h2>
          <p className="text-gray-700">
            Opt for one or more rounds of paid video/telephonic consultations/therapy sessions with our expert counsellors of your choice to deal with mental health concerns that need extensive, continuous support.
          </p>
          <div className="flex justify-center mt-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 6l-2-2-4 4"></path></svg>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Skill Academy</h2>
          <p className="text-gray-700">
            Employees and Volunteers, most of who have a background in Psychology, are trained by experienced and licensed mental health professionals. It is compulsory for all our Employees and Volunteers to sit through an extensive virtual training session. This training equips them to manage crisis conversations effectively.
          </p>
          <div className="flex justify-center mt-4">
            <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8l-4-4-4 4"></path></svg>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Raise Awareness & Build Advocacy</h2>
          <p className="text-gray-700">
            Stigma keeps people from addressing mental health issues. We work with governments, educational institutions, civil society and media to combat the bias and build support for mental health counselling and interventions.
          </p>
          <div className="flex justify-center mt-4">
            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8l-4-4-4 4"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;