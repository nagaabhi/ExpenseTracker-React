import { Link } from "react-router-dom";

function Header() {
  // json-server --watch db.json --port 3001
  return (<>
    <div className="header-section flex flex-row items-center justify-between p-5 bg-gray-300">
      <Link to="/"><div className="header-left-container">
        <p className="text-[21px]"><strong className="text-orange-600">EXPENSE</strong><span>-Tracker</span></p>
      </div></Link>

      <div className="header-middle-container">
        <ul className="hidden sm:hidden md:hidden lg:flex xl:flex items-center justify-center space-x-9 font-medium " >
          <Link to="/expenses/home"><li>HOME</li></Link>

          <li>ABOUT</li>
          <li>UPDATES</li>
        </ul>
      </div>
      <div className="header-right-container">
        <button className="bg-gray-700 text-gray-50 p-1 rounded-[40px]">Dark Mode</button>
      </div>
    </div>
  </>
  )
}
export default Header;