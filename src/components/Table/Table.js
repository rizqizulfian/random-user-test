import React from "react";
import { FaSort } from 'react-icons/fa';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Table = () => {

  return (
    <>
      <div className="mt-8 relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 bg-gray-50 table-auto">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/6">
                Username
              </th>
              <th scope="col" className="px-6 py-3 w-1/6">
                <div className="flex justify-between">
                  <span>Name</span>
                  <button><FaSort /></button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 w-1/6">
                <div className="flex justify-between">
                  <span>Email</span>
                  <button><FaSort /></button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 w-1/6">
                <div className="flex justify-between">
                  <span>Gender</span>
                  <button><FaSort /></button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 w-1/6">
                <div className="flex justify-between">
                  <span>Registered Date</span>
                  <button><FaSort /></button>
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
      <div className="mt-8 flex items-center justify-end space-x-1">
        <button class="flex items-center px-2 py-2 text-gray-500 border border-slate-300 hover:border-slate-400">
          <RiArrowLeftSLine />
        </button>
      
        <button class="px-2 py-1 text-gray-500 border border-slate-300 hover:border-slate-400">
          1
        </button>
        <button class="px-2 py-1 text-gray-500 border border-slate-300 hover:border-slate-400">
          2
        </button>
        <button class="px-2 py-1 text-gray-500 border border-slate-300 hover:border-slate-400">
          3
        </button>
        <button class="px-2 py-2 text-gray-500 border border-slate-300 hover:border-slate-400">
          <RiArrowRightSLine />
        </button>
      </div>
    </>
  );
};

export default Table;