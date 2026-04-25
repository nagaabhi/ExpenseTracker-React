import { Link } from "react-router-dom";

function ShowAllExpensesBtn() {
  return (<>
    <div className="show-all-expenses-button text-center flex flex-row items-center justify-center">
      <Link to="/expenses/allExpenses"><button className="bg-blue-300 p-3 rounded-[40px] font-bold cursor-pointer hover:bg-blue-400 transition-all shadow hover:shadow-gray-500 hover:backdrop-blur-2xl">Show All Expenses</button></Link>


    </div>

  </>)
}
export default ShowAllExpensesBtn;