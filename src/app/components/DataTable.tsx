import React from 'react'

function DataTable() {
  return (
    <div className='py-1'>
        <table className="min-w-full divide-y divide-gray-200" aria-label="Example table of Opportunities with vertical borders">
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3 border-black text-left text-lg font-semibold text-black uppercase tracking-wider">
        Opportunity Name
      </th>
      <th scope="col" className="px-6 py-3 border-black text-left text-lg font-semibold text-black uppercase tracking-wider">
        Account Name
      </th>
      <th scope="col" className="px-6 py-3 border-black text-center text-lg font-semibold text-black uppercase tracking-wider">
        Close Date
      </th>
      <th scope="col" className="px-6 py-3 border-b border-black text-center text-lg font-semibold text-black uppercase tracking-wider">
        Stage
      </th>
      <th scope="col" className="px-6 py-3 border-black text-center text-lg font-semibold text-black uppercase tracking-wider">
        Confidence
      </th>
      <th scope="col" className="px-6 py-3 border-black text-center text-lg font-semibold text-black uppercase tracking-wider">
        Amount
      </th>
      <th scope="col" className="px-6 py-3 border-black text-center text-lg font-semibold text-black uppercase tracking-wider">
        Contact
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y border-r divide-gray-200">
    <tr className='border border-black border-r'>
      <td className="px-6 py-4  whitespace-nowrap">
        <div className="text-lg   font-medium text-gray-900">Cloudhub</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg font-medium text-gray-900">Cloudhub</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900">4/14/2015</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900">Prospecting</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900">20%</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900">$25k</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-blue-600 hover:underline">jrogers@cloudhub.com</div>
      </td>
    </tr>
    {/* Row 2 */}
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg font-medium text-gray-900">Cloudhub 2</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg font-medium text-gray-900">Cloudhub 2</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900">4/14/2023</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900">Prospecting</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900">50%</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900">$55k</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-blue-600 hover:underline">jrogers@cloudhub.com</div>
      </td>
    </tr>
    {/* Repeat for other rows */}
  </tbody>
</table>

    </div>
  )
}

export default DataTable
