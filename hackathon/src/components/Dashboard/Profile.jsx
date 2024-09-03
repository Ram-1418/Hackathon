import React from "react";

function Profile({ userData, isDoctor }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <img
            src={
              userData?.photoURL ??
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {userData?.displayName}
            </h3>
            {/* Display other user data as needed */}
          </div>
        </div>
        <div className="mt-4 p-2">
          <label htmlFor="email" className="font-bold p-2">
            Email
          </label>
          <br/>
          <input
            type="email"
            id="email"
            value={userData?.email}
            name="email"
            className="min-w-[300px] p-2 my-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
