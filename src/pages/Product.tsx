import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IProduct } from "../types/Products";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, cartItems } = useContext(ShopContext);
  const [productDetails, setProductDetails] = useState<IProduct | null>(null);
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const fetchProductDetails = (productId: string) => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductDetails(product);
      setImage(product.image?.[0]);
    }
  };
  console.log(cartItems);
  useEffect(() => {
    fetchProductDetails(productId!);
  }, [productId]);
  return productDetails ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scrol justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productDetails.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productDetails.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w3 5" />
            <img src={assets.star_icon} alt="" className="w3 5" />
            <img src={assets.star_icon} alt="" className="w3 5" />
            <img src={assets.star_icon} alt="" className="w3 5" />
            <img src={assets.star_dull_icon} alt="" className="w3 5" />
            <p className="pl-2">122</p>
          </div>
          <p className="text-3xl mt-5 font-medium">
            {currency}
            {productDetails.price}
          </p>
          <p className="text-gray-500 mt-4">{productDetails.description}</p>
          <h3 className="mt-6">Select Size</h3>
          <div className="flex gap-2">
            {productDetails.sizes.map((item, index) => (
              <div
                key={index}
                onClick={() => setSize(item)}
                className={`flex justify-center items-center w-10 h-10 border-2 mt-4 bg-gray-100 cursor-pointer ${
                  size === item && "border-yellow-300"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <button
            onClick={() => addToCart(productDetails._id, size)}
            className="mt-8 bg-black text-white p-2 w-[8rem] active:bg-gray-700"
          >
            Add to Cart
          </button>
          <hr className="mt-10" />
          <div className="flex flex-col mt-6 text-gray-500 text-sm">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex">
          <div className="border p-2 w-[7rem] font-medium text-center">
            Description
          </div>
          <div className="border p-2 w-[7rem] text-gray-700 font-sm">
            Reviews (122)
          </div>
        </div>
        <div className="border h-">
          <p className="p-4 h-auto text-gray-500 font-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            unde cupiditate labore quia. Minima voluptas tempore eum voluptates
            sed, harum maxime ad aliquam similique expedita veritatis corporis
            fugit laboriosam asperiores. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptate unde cupiditate labore quia. Minima
            voluptas tempore eum voluptates sed, harum maxime ad aliquam
            similique expedita veritatis corporis fugit laboriosam asperiores.
          </p>
        </div>

        {/* Related Products */}
        <RelatedProducts
          category={productDetails.category}
          subCategory={productDetails.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
