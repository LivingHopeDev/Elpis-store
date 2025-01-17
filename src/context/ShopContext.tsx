import React, { createContext, ReactNode, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { IProduct } from "../types/Products";
import { toast } from "react-toastify";
interface IShopContext {
  products: IProduct[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (itemId: string, size: string) => void;
  cartItems: CartItems;
  getCartCount: () => number;
}
type CartItems = {
  [itemId: string]: {
    [size: string]: number;
  };
};
// Provide a default value for the context
const defaultShopContext: IShopContext = {
  products: [],
  currency: "$",
  delivery_fee: 10,
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
  cartItems: {},
  addToCart: () => {},
  getCartCount: () => 0,
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
  const [cartItems, setCartItems] = useState<CartItems>({});

  const addToCart = (itemId: string, size: string) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      console.log(items);

      for (const item in cartItems[items]) {
        console.log(item);
        if (cartItems[items][item]) {
          totalCount += 1;
        }
      }
    }
    console.log(totalCount);

    return totalCount;
  };
  useEffect(() => {
    getCartCount();
  }, [addToCart]);
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
