import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center rounded-sm">
  <div className="container mx-auto"> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg mb-2">Contact Us</h3>
        <ul className="text-white">
          <li><a className='text-blue-400 hover:text-blue-600' href="#">contack@mentalhealthportal.com</a></li>
          <li><a href="#">+9309839597</a></li>
          <li><a href="#">Center Timing :<br />Mon-Sat:9am to 8am</a></li>
          <li><a href="#">contact timing: <br />mon-sat: 9am  to 8am</a></li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold mb-2">Location(pune)</h3>
        <ul className="text-white">
         <p>center for mental,</p>
         <p>102/201 Housing society</p>
         <p>sant tukaram nagar,</p>
         <p>pune 411 021,MH,india</p>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg mb-2">Important Links</h3>
        <ul className="text-white">
         <p>Appointment Booking Policy</p>
         <p>privacy policy</p>
         <p>term& condition</p>
         <p>refund and cancellation</p>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg mb-2">Recent Posts</h3>
        <ul className="text-white">
         <p>post traumatic growth</p>
         <p>understanding trauma</p>
       
        </ul>
      </div>
      {/* Add more columns for other content if needed */}
    </div>
  </div>
  <p className="border-t border-gray-700 mt-6 pt-4 text-center">
    Built for health and wellness with ❤️ using Tailwind CSS.
  </p>
</footer>

  )
}

export default Footer