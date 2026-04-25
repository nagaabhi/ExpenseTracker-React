function ExpenseData({ expense, index, deleteExpense }) {

  return (<>
    <tr className="border-t hover:bg-gray-50">
      <td className="py-2 px-4">{index}</td>
      <td className="py-2 px-4 font-semibold">{expense.title}</td>
      <td className="py-2 px-4 text-sm text-gray-600">{expense.description}</td>
      <td className="py-2 px-4">{expense.category}</td>
      <td className="py-2 px-4 text-green-600 font-medium">₹ {expense.amount}</td>
      <td className="py-2 px-4 flex justify-center gap-3">
        <button className="text-blue-500 hover:text-blue-700">
          ✏️
        </button>
        <button className="text-red-500 hover:text-red-700" onClick={() => deleteExpense(expense.id)}>
          🗑️
        </button>

      </td>
    </tr>
  </>)
}
export default ExpenseData;