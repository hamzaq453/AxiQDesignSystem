import React from 'react';
import { MdClose, MdSearch, MdAdd } from 'react-icons/md'; // Import icons from react-icons

const ListScreen = () => {
  return (
    <div className=" bg-gray-600 bg-opacity-50 h-full w-full ">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-header"
        className="relative  p-4  my-1 bg-white text-black rounded-lg shadow-lg">
        <div className=" justify-between items-start p-4 rounded-t border-b">
          <h1 id="modal-header" className="text-2xl font-semibold">Accounts</h1>
          <p className="text-base flex">2 items - Updated few seconds ago</p>
          {/* <button className="text-black">
            <MdClose className="text-2xl" />
          </button> */}
        </div>
        <div className="p-4">
          <div className="mb-4">
            <div className="flex items-center border rounded">
              <input
                type="text"
                className="py-2 px-4 w-full border-none"
                placeholder="Search Salesforce"
              />
              <span className="p-2">
                <MdSearch className="text-gray-400 text-xl" />
              </span>
            </div>
          </div>
          <div className="text-base mb-2">0 Item(s) Selected</div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y text-black divide-gray-200">
              <thead>
                <tr>
                  <th className=" py-3 text-left text-base font-base text-black uppercase tracking-wider"></th>
                  <th className=" py-3 text-left text-base font-base text-black uppercase tracking-wider">Account Name</th>
                  <th className=" py-3 text-left text-base font-base text-black uppercase tracking-wider">Billing City</th>
                  <th className=" py-3 text-left text-base font-base text-black uppercase tracking-wider">Billing State/Province</th>
                  <th className=" py-3 text-left text-base font-base text-black uppercase tracking-wider">Billing Country</th>
                  <th className=" py-3 text-left text-base font-base text-black uppercase tracking-wider">Employees</th>
                  <th className=" py-3 text-left text-base font-base text-black uppercase tracking-wider">Phone</th>
                  <th className=" py-3 text-left text-base font-base text-black uppercase tracking-wider">Owner Last Name</th>



                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Repeat this tr for each product in the list */}
                <tr className="hover:bg-gray-100">
                  <td className=" py-4 whitespace-nowrap text-right text-base font-base">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">
                        <MdAdd className="text-black" />
                      </span>
                    </label>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">John</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">NY</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">New York</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">USA</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">6-10</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">123456789</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">Admin</div>
                  </td>
                </tr>
                {/* List 2 */}
                <tr className="hover:bg-gray-100">
                  <td className=" py-4 whitespace-nowrap text-right text-base font-base">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">
                        <MdAdd className="text-black" />
                      </span>
                    </label>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">Michael</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">Florida</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">State of Florida</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">USA</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">10-19</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">123456789</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">Admin</div>
                  </td>
                </tr>
                {/* List 3 */}
                <tr className="hover:bg-gray-100">
                  <td className=" py-4 whitespace-nowrap text-right text-base font-base">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">
                        <MdAdd className="text-black" />
                      </span>
                    </label>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">Nick</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">New Jersey</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">New Jersey</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">USA</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">1-5</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">123456789</div>
                  </td>
                  <td className=" py-4 whitespace-nowrap">
                    <div className="text-base text-black">Admin</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-end p-4 border-t border-gray-200 rounded-b">
          <button className="bg-white py-2 px-4 text-base text-gray-700 hover:bg-gray-50 rounded border border-gray-300 mr-2">Cancel</button>
          <button className="py-2 px-4 bg-blue-600 text-white text-base rounded hover:bg-blue-700">Next</button>
        </div>
      </section>
    </div>
  );
};

export default ListScreen;
