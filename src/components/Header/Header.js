import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row space-x-5">
      <div className="flex-none w-64">
        <label class="block mb-1" for="search">Search</label>
        <div className="mt-1 relative shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full border-gray-300 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="btn inline-block rounded px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-indigo-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-200 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-none w-64">
        <label className="block mb-1" for="price">Gender</label>
        <select
          className="block w-full mt-1 border-gray-300 shadow-sm rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div className="flex-none w-64">
        <label className="block mb-1">‎‎ㅤ</label>
        <button class="rounded text-gray-800 font-semi py-2 px-4 border border-gray-300 hover:bg-gray-100 hover:border-indigo-300 hover:bg-transparent">
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Header;