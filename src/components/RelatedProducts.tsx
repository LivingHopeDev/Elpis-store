import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IProduct } from "../types/Products";
import Title from "./Title";
import ProductItems from "./ProductItems";

const RelatedProducts = ({
  category,
  subCategory,
}: {
  category: string;
  subCategory: string;
}) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[] | []>([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsDuplicate = products.slice();
      productsDuplicate = productsDuplicate.filter(
        (item) => item.category === category
      );
      productsDuplicate = productsDuplicate.filter(
        (item) => item.subCategory === subCategory
      );
      setRelatedProducts(productsDuplicate.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl mb-4">
        <Title text1="RELATED " text2="PRODUCTS" />
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {relatedProducts.map((item, index) => (
          <ProductItems
            id={item._id}
            image={item.image}
            price={item.price}
            name={item.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
