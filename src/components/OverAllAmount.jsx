import useExpenses from "./useExpenses";

function OverAllAmount() {

  const { expensesData } = useExpenses();

  //CALCULATING THE OVER ALL AMOUNT VALUE
  const overAllAmount = expensesData.reduce((total, item) => {
    total += Number(item.amount);
    return total;

  }, 0);
  return (<>
    <button className="float-right m-4 bg-red-200 p-2 rounded font-bold">OverAll Amount : {overAllAmount}</button>

  </>)
}
export default OverAllAmount;