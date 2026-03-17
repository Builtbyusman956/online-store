import Logo from "../assets/Logo.png"
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white">
      <div>
        <img className="h-16 object-contain" src="https://t4.ftcdn.net/jpg/03/91/54/95/360_F_391549593_jbgnNDH9UCZVvm6unMokdOcaPRCxEBfo.jpg"/>
      </div>
      <div className="flex items-center">
        <input 
          className="w-80 h-10 border border-gray-300 px-3 outline-none rounded-l-md" 
          type="search" 
          placeholder="Search products"
        />
        <button className="bg-green-600 h-10 px-4 text-white rounded-r-md hover:bg-green-700">
          Search
        </button>
      </div>
      <div>
       <button className="bg-white border-2 border-white text-green-600 py-2 px-6 shadow-md hover:shadow-lg transition">
 <span>Become vendor</span>
</button>
      </div>
      <div>
        <ul className="flex items-center gap-6 text-sm font-medium">
          
          <li>
            <a href="#" className="flex items-center gap-1 hover:text-green-600 transition">
              <FaCodeCompare />
              <span>Compare</span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center gap-1 hover:text-green-600 transition">
              <CiHeart />
              <span>Wishlist</span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center gap-1 hover:text-green-600 transition">
              <CiShoppingCart />
              <span>Cart</span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center gap-1 hover:text-green-600 transition">
              <CiUser />
              <span>Account</span>
            </a>
          </li>

        </ul>
      </div>
  </nav>
  )
}

export default Navbar