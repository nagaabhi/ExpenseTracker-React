import { Link } from "react-router-dom";

function Home() {
  return (<div className="text-center m-10 font-bold text-7xl">

    <h1>Your <span className="text-red-400 p-1 rounded-2xl">Expense Tracker</span> System</h1>
    <Link to="/"><button className="text-[30px] bg-gray-300 p-3 rounded cursor-pointer">Explore</button></Link>

  </div>)
}
export default Home;