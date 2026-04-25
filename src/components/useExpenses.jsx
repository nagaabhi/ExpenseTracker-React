import axios from 'axios'
import { useEffect, useState } from 'react';
function useExpenses() {

  //EXPENSE DATA STATE AND EXPENSE DATA SET FUNCTION
  const [expensesData, setExpensesData] = useState([]);

  //ACCESSING THE DATA FROM THE SERVER BY MAKE USE OF USE EFFECT IN WHICH IT WILL RUNS ONLY ONCE WHEN THE\
  //PAGE LOADS
  useEffect(() => {
    axios.get('http://localhost:3001/expenses')
      .then((response) => {
        setExpensesData(response.data);

      })
  }, []);


  //DELETING THE DATA FROM THE SERVER BY MAKE USE OF ID
  const deleteExpense = (id) => {
    axios.delete(`http://localhost:3001/expenses/${id}`)
      .then((response) => {
        setExpensesData(response.data);
      })
  }

  //CALCULATING THE TOTAL AMOUNT FROM THE EXPENSE DATA
  const totalIncome = expensesData.reduce((total, item) => {
    if (item.type === 'income') {
      total += Number(item.amount);
    }
    return total;
  }, 0);


  //CALCULATING THE TOTAL EXPENSE FROM THE EXPENSE DATA
  const totalExpense = expensesData.reduce((total, item) => {
    if (item.type === 'expense') {
      total += Number(item.amount);
    };
    return total;
  }, 0);

  //CALCULATING THE TOTAL BALANCE 
  const totalBalance = totalIncome - totalExpense;

  return ({ expensesData, setExpensesData, totalIncome, totalExpense, totalBalance, deleteExpense })
}
export default useExpenses;