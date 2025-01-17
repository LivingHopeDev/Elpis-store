import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const { search, setSearch, showSearch } = useContext(ShopContext);
  const location = useLocation();

  return showSearch && location.pathname === "/Collection" ? (
    <div className="border-t border-b bg-gray-50 text-center ">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm "
          type="text"
          placeholder="search"
        />
        <img src={assets.search_icon} alt="" className="w-3" />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
