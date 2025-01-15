import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm">
        <div>
          <Link to="/">
            <h1 className="w-[12rem] text-3xl tracking-widest">ELPIS</h1>
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            reprehenderit .
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <div className="text-xl font-medium mb-5">
            <p>GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+234-8065108162</li>
              <li>info@elpistore.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 Elpistore . All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
