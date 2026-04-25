import useExpenses from "./useExpenses";

function ExpenseDetails() {
  const { totalIncome, totalExpense, totalBalance } = useExpenses();
  return (<>

    <div className="expense-details  w-20 sm:w-96 md:w-full lg:w-full ml-auto mr-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  place-content-center place-items-center mt-5 gap-5">
      <div className="total-income bg-green-200">
        <p><strong>Income</strong></p>
        <p>Total Income : {totalIncome}</p>
      </div>
      <div className="total-expense bg-red-200">
        <p><strong>Expense</strong></p>
        <p>Total Expense : {totalExpense}</p>
      </div>
      <div className="total-balance bg-gray-300">
        <p><strong>Balance</strong></p>
        <p className={`${totalBalance > 0 ? 'bg-green-200' : 'bg-red-200'} w-fit rounded`}>Total Balance : {totalBalance}</p>
      </div>
    </div>

  </>)

}
export default ExpenseDetails;