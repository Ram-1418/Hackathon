import React from "react";

function App() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-center mb-12">
          How We Can Help
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-3">
              Free 24×7×365 Mental Health Support
            </h2>
            <p className="text-gray-600 mb-6">
              Free mental health support is available 24/7 throughout the year.
              Don’t hesitate to reach out — a single conversation may help you feel better.
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4m0 4h4m-4 0v4m0-4h4m-4 0V8m0 0l3 3m-3-3l3 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-3">
              Paid Consultation
            </h2>
            <p className="text-gray-600 mb-6">
              Book video or telephonic therapy sessions with expert counsellors
              for continuous professional mental health support.
            </p>
            <div className="flex justify-center">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4m6 6l-2-2-4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-3">
              Skill Academy
            </h2>
            <p className="text-gray-600 mb-6">
              Our trained professionals undergo extensive virtual training to
              effectively manage crisis conversations and provide quality care.
            </p>
            <div className="flex justify-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 4v16m8-8l-4-4-4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-3">
              Raise Awareness & Advocacy
            </h2>
            <p className="text-gray-600 mb-6">
              We collaborate with institutions and communities to reduce stigma
              and promote mental health awareness.
            </p>
            <div className="flex justify-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 4v16m8-8l-4-4-4 4" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default App;