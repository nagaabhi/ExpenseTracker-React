function ShowExpensesDetails() {
  return (<>
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4 font-semibold">Groceries</td>
              <td className="py-2 px-4 text-sm text-gray-600">Weekly supermarket shopping</td>
              <td className="py-2 px-4">Food</td>
              <td className="py-2 px-4 text-green-600 font-medium">₹ 2,500</td>
              <td className="py-2 px-4 flex justify-center gap-3">
                <button className="text-blue-500 hover:text-blue-700">
                  ✏️
                </button>
                <button className="text-red-500 hover:text-red-700">
                  🗑️
                </button>

              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </>)
}
export default ShowExpensesDetails;