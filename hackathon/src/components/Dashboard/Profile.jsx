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
          </div>
        </div>
        <div className="grid md:grid-cols-2 px-10 w-full gap-8">
          <div className="mb-4 ">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userData?.email}
              name="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              readOnly
            />
          </div>
          {userData?.phone && (
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={userData?.phone}
                name="phone"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
