import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Home from "./components/Home";
import ExpenseDetails from "./components/ExpenseDetails";
import Categories from "./components/Categories";
import CategorySection from "./components/CategoriesSection";
import TopThreeExpenses from "./components/TopThreeExpenses";
import ShowAllExpensesBtn from "./components/ShowAllExpensesBtn";
import ShowAllExpensesDetails from "./components/ShowAllExpensesDetails";
import AddExpenses from "./components/AddExpenses";

function App() {
  return (<>
    <ToastContainer position="top-right" autoClose={1000} />
    <Header />
    <Routes>
      <Route path="/" element={<> <ExpenseDetails />
        <Categories />
        <CategorySection />
        <TopThreeExpenses />
        <ShowAllExpensesBtn />
      </>} />
      <Route path="/expenses/allExpenses" element={<ShowAllExpensesDetails />} />
      <Route path="/expenses/addExpenses" element={<AddExpenses />} />
      <Route path="/expenses/home" element={<Home />} />
    </Routes>


  </>)
}
export default App;