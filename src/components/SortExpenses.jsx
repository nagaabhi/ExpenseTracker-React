import useExpenses from "./useExpenses";

function SortExpenses() {

  const { expensesData, setExpensesData } = useExpenses();

  function sortDataInASCByPrice() {
    const sortDataByPriceInASC = [...expensesData].sort((exp1, exp2) => {
      return parseFloat(exp1.amount) - parseFloat(exp2.amount);
    });
    setExpensesData(sortDataByPriceInASC);

  }

  function sortDataInDESCByPrice() {
    const sortDataByPriceInDESC = [...expensesData].sort((exp1, exp2) => {
      return parseFloat(exp2.amount) - parseFloat(exp1.amount);
    });
    setExpensesData(sortDataByPriceInDESC);

  }

  function sortDataByNameUL() {
    const sortDataByName = [...expensesData].sort((exp1, exp2) => {
      return exp1.title.localeCompare(exp2.title);

    });
    setExpensesData(sortDataByName);
    console.log(sortDataByName);

  }

  function sortDataByNameLU() {
    const sortDataByName = [...expensesData].sort((exp1, exp2) => {
      return exp2.title.localeCompare(exp1.title);

    });
    setExpensesData(sortDataByName);

  }
  return (<>
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
  </>)
}
export default SortExpenses;