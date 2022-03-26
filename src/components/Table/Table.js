import React from "react";

const Table = () => {

  return (
    <div className="mt-8 relative overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left text-gray-500 bg-gray-50 table-auto">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 bg-green-500">
              Username
            </th>
            <th scope="col" className="px-6 py-3 bg-blue-500">
              Name
            </th>
            <th scope="col" className="px-6 py-3 bg-indigo-500">
              Email
            </th>
            <th scope="col" className="px-6 py-3 bg-red-500">
              Gender
            </th>
            <th scope="col" className="py-3 bg-blue-500">
              <div class="flex justify-end">
                <p>Registered Date</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">
              Sliver
            </td>
            <td className="px-6 py-4">
              Laptop
            </td>
            <td className="px-6 py-4">
              $2999
            </td>
            <td className="px-6 py-4">
              $2999
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">
              White
            </td>
            <td className="px-6 py-4">
              Laptop PC
            </td>
            <td className="px-6 py-4">
              $1999
            </td>
            <td className="px-6 py-4">
              $1999
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium">
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">
              White
            </td>
            <td className="px-6 py-4">
              Laptop PC
            </td>
            <td className="px-6 py-4">
              $1999
            </td>
            <td className="px-6 py-4">
              $1999
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;