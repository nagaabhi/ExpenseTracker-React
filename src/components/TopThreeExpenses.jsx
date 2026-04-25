import useExpenses from "./useExpenses";
import ShowExpensesDetails from "./ShowExpensesDetails";
import ExpenseData from "./ExpenseData";
function TopThreeExpenses() {

  const { expensesData, deleteExpense } = useExpenses();

  return (<>
    <div className="heading-element">
      <h2 className="m-4 font-bold text-[22px]">Top <span className="text-red-500">3</span> Expenses</h2>
    </div>
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">SL.No</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              expensesData && expensesData.slice(0, 3).map((expense, index) => {
                return (<>
                  <ExpenseData expense={expense} index={index + 1} deleteExpense={deleteExpense} />
                </>)



              })
            }


          </tbody>
        </table>
      </div>
    </div>

  </>
  )




}
export default TopThreeExpenses;