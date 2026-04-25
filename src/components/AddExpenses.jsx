import axios from "axios";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useExpenses from "./useExpenses";


//THIS FUNCTION IS MAINLY USED TO ADD THE NEW EXPENSE IN TO THE SERVER
function AddExpenses() {

  const { expensesData, setExpensesData } = useExpenses();

  const notify = () => toast('New Expense Added Successfully');

  //ADDING THE USE REF TO ALL THE INPUT FIELDS FOR DIRECTLY ACCESSING OF THE DATA FROM THE INPUTS
  const title = useRef("");//REF TO TITLE
  const description = useRef("");//REF TO DESCRIPTION
  const category = useRef("");//REF TO CATEGORY
  const amount = useRef("");//REF TO AMOUNT
  const expenseType = useRef("");//REF TO EXPENSE TYPE

  function addNewExpense() {
    //ACCESSING THE USE REF VALUES FROM THE INPUTS
    const expenseTitle = title.current.value;//ACCESSING THE EXPENSE TITLE
    const expenseDescription = description.current.value;//ACCESSING THE EXPENSE DESCRIPTION
    const expenseCategory = category.current.value;//ACCESSING THE EXPENSE CATEGORY
    const expenseAmount = amount.current.value;//ACCESSING THE EXPENSE AMOUNT
    const selectExpenseType = expenseType.current.value;//ACCESSING THE EXPENSE TYPE

    const newExpense = {
      id: expensesData.length,
      title: expenseTitle,
      description: expenseDescription,
      category: expenseCategory,
      type: selectExpenseType,
      amount: expenseAmount

    }
    //NEW OBJECT CREATIONS FOR ADDING THE NEW EXPENSE INTO THE SERVER


    //CHECKING IF THE ALL THE FIELDS ARE FILLED BY THE USER IF NOT THROWING AN ERROR FOR THE USER
    if (expenseTitle === '' || expenseDescription === '' || expenseCategory === '' || expenseAmount === '' || selectExpenseType === '') {
      toast.error("Please fill all the fields above...");
      return;
    }
    

    expensesData.forEach((data) => {
      if (data.category === expenseCategory) {
        return data.amount += expenseAmount;
      }
      console.log("Similarity Found");
    })

    //ADDING THE EXPENSE TO THE SERVER
    axios.post('http://localhost:3001/expenses', newExpense).
      then((response) => {
        setExpensesData(response.data);
        toast.success("New Expense Added...")
      }).catch((err) => {
        console.log('error occurred', err);
        toast.error("Failed To Load API...")
      });

    console.log(newExpense);
  }



  return (<>
    <div class="max-w-3xl mx-auto p-4 add-expenses">
      <form class="bg-white shadow-md rounded-xl p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="add-show-expenses flex flex-row items-center justify-between">
          <div className="add-expense-heading">
            <h2 class="text-xl font-bold text-gray-700"><span className="text-red-400">Add</span> Expense</h2>
          </div>
          <Link to="/expenses/allExpenses">
            <div className="show-all-expenses-heading">
              <h2 className="font-bold text-xl"><span className="text-red-400">Show All </span>Expenses</h2>
            </div>
          </Link>


        </div>


        <div>
          <label class="block text-sm font-medium mb-1">Title</label>
          <input ref={title} type="text" placeholder="Enter title"
            class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Description</label>
          <textarea ref={description} rows="3" placeholder="Enter description"
            class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2"></textarea>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Category</label>
            <select ref={category}
              class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2">
              <option>Select Category</option>
              <option>Food</option>
              <option>Transport</option>
              <option>Shopping</option>
              <option>Education</option>
              <option>Health</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Amount</label>
            <input ref={amount} type="number" placeholder="Enter amount"
              class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Type</label>
          <select ref={expenseType}
            class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2">
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div>
          <button onClick={addNewExpense}
            class="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 hover:shadow-lg hover:cursor-pointer">
            Create Expense
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  </>)
}
export default AddExpenses;