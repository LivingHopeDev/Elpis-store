import React, { createContext, ReactNode } from "react";
import { products } from "../assets/frontend_assets/assets";
import { IProduct } from "../types/Products";
interface IShopContext {
  products: IProduct[];
  currency: string;
  delivery_fee: number;
}

export const ShopContext = createContext<IShopContext | null>(null);
interface ShopContextProviderProps {
  children: ReactNode;
}
const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const currency = `$`;
  const delivery_fee = 10;
  const value = { products, currency, delivery_fee };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;