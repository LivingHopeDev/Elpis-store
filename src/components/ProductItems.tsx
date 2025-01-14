import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({
  id,
  image,
  name,
  price,
}: {
  id: string;
  image: string[];
  name: string;
  price: number;
}) => {
  const shopContext = useContext(ShopContext);
  if (!shopContext) return <div>Error: Can't load context</div>;

  const { currency } = shopContext;
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden rounded-md">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium w-full flex justify-end">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItems;
