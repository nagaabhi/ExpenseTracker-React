
import useExpenses from "./useExpenses";
function CategorySection() {

  const { expensesData } = useExpenses();
  return (<>
    <div className="p-4">
      <div className="flex gap-4 overflow-x-auto scroll-smooth">
        {
          expensesData.map((expenses) => {
            return (<>
              <div className="min-w-62.5
         bg-white shadow-md rounded-xl p-4 border">
                <h2 className="font-bold text-lg mb-2">{expenses.category}</h2>
                <p className="text-gray-600 text-sm mb-2">{expenses.description}</p>
                <p className="text-green-600 font-semibold"><strong className="text-black">Total Amount : </strong>₹ {expenses.amount}</p>
              </div>
            </>)
          })
        }

      </div>
    </div>
  </>)
}
export default CategorySection;