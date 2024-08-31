import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 p-6 text-center">
  <div className="container mx-auto"> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg mb-2">Our Services</h3>
        <ul className="text-gray-600">
          <li><a href="#">Health Checkups</a></li>
          <li><a href="#">Nutrition Counseling</a></li>
          <li><a href="#">Fitness Programs</a></li>
          <li><a href="#">Mental Wellness</a></li>
        </ul>
      </div>
      {/* Add more columns for other content if needed */}
    </div>
  </div>
  <p className="text-gray-600 mt-6">
    Built for health and wellness with ❤️ using Tailwind CSS.
  </p>
</footer>

  )
}

export default Footer