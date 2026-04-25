import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useExpenses from "./useExpenses";
import OverAllAmount from "./OverAllAmount";
import SortExpenses from "./SortExpenses";


import ExpenseData from "./ExpenseData";

function ShowAllExpensesDetails() {

  const { expensesData, setExpensesData, deleteExpense } = useExpenses();


  //SORT THE EXPENSE DATA BY THE PRICE IN THE ASSCENDING ORDER
  function sortDataInASCByPrice() {
    const sortDataByPriceInASC = [...expensesData].sort((exp1, exp2) => {
      return parseFloat(exp1.amount) - parseFloat(exp2.amount);
    });
    setExpensesData(sortDataByPriceInASC);

  }

  //SORTING THE DATA IN THE DESCENDING ORDER BY THE PRICE
  function sortDataInDESCByPrice() {
    const sortDataByPriceInDESC = [...expensesData].sort((exp1, exp2) => {
      return parseFloat(exp2.amount) - parseFloat(exp1.amount);
    });
    setExpensesData(sortDataByPriceInDESC);
  }

  //SORTING THE DATA BY THE NAME FROM UPPER TO LOWER
  function sortDataByNameUL() {
    const sortDataByName = [...expensesData].sort((exp1, exp2) => {
      return exp1.title.localeCompare(exp2.title);

    });
    setExpensesData(sortDataByName);

  }

  //SORTING THE DATA BY THE NAME FROM LOWER TO UPPER
  function sortDataByNameLU() {
    const sortDataByName = [...expensesData].sort((exp1, exp2) => {
      return exp2.title.localeCompare(exp1.title);

    });
    setExpensesData(sortDataByName);

  }




  return (<>
    <div className="heading-element flex flex-row items-center justify-between">
      <div className="all-expenses-title">
        <div className="heading">
        </div>
        {/* <SortExpenses /> */}
        <div className="sorting m-4">
          <div className="flex flex-wrap gap-3">
            <button onClick={sortDataByNameLU}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition">
              Name ↑
            </button>
            <button onClick={sortDataByNameUL}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition">
              Name ↓
            </button>
            <button onClick={sortDataInDESCByPrice}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition">
              Price ↑
            </button>
            <button onClick={sortDataInASCByPrice}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition">
              Price ↓
            </button>

          </div>
        </div>
        <h2 className="m-4 font-bold text-[22px]"><span className="text-red-500">All</span> Expenses</h2>
      </div>
      <div className="add-expenses-button mr-5">
        <Link to="/expenses/addExpenses"><button className="bg-green-300 p-1 rounded-[10px] text-gray-950 font-semibold hover:cursor-pointer hover:bg-green-400 transition-all">+Add Expenses</button></Link>
      </div>

    </div>
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left"><span className="text-red-500">E</span>.NO</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              expensesData && expensesData.map((expense, index) => {
                return (<>
                  <ExpenseData expense={expense} index={index + 1} deleteExpense={deleteExpense} />

                </>)



              })
            }


          </tbody>
        </table>
      </div>
    </div>
    <OverAllAmount />

  </>)
}
export default ShowAllExpensesDetails;