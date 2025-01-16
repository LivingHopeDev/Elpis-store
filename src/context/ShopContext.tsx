import React, { createContext, ReactNode, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { IProduct } from "../types/Products";
interface IShopContext {
  products: IProduct[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
// Provide a default value for the context
const defaultShopContext: IShopContext = {
  products: [],
  currency: "$",
  delivery_fee: 10,
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
};
export const ShopContext = createContext<IShopContext>(defaultShopContext);
interface ShopContextProviderProps {
  children: ReactNode;
}
const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const currency = `$`;
  const delivery_fee = 10;
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
