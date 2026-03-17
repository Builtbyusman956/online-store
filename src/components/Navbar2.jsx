import { BiCategory } from "react-icons/bi";
import { IoFlameOutline } from "react-icons/io5";



const Navbar2 = () => {
  return (
    <nav className="flex justify-between items-center p-6 px-6 py-3 bg-white shadow-sm">
      <div className="relative w-64">
        <select className="w-full appearance-none border border-gray-300 px-3 py-2 pr-10 bg-green-600 text-white rounded-md outline-none">
          <option value="">Browse All categories</option>
          <option value="1">Coke & Milk</option>
          <option value="2">Organic Kiwi</option>
          <option value="3">Peach</option>
          <option value="4">Red Apple</option>
          <option value="5">Snacks</option>
          <option value="6">Vegetables</option>
          <option value="7">Strawberry</option>
          <option value="8">Black plum</option>
          <option value="9">Custard apple</option>
          <option value="10">Coffee & Tea</option>
        </select>
        <BiCategory className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none text-lg" />
      </div>
      <div>
        <a href="#" className="flex items-center gap-1 hover:text-green-600 transition text-gray-800 font-medium">
          <IoFlameOutline className="text-lg" />
          <span>Hot Deals</span>
        </a>
      </div>
      <div>
        <ul className="flex gap-5 hover:cursor-pointer">
            <li className="hover:text-green-700">Home</li>
            <li className="hover:text-green-700">About</li>
            <li className="hover:text-green-700">Shop</li>
            <li className="hover:text-green-700">Vendors</li>
            <li className="hover:text-green-700">Mega menu</li>
            <li className="hover:text-green-700">Blog</li>
            <li className="hover:text-green-700">Pages</li>
            <li className="hover:text-green-700">Contact</li>
        </ul>
      </div>
      </nav>
  );
};

export default Navbar2;