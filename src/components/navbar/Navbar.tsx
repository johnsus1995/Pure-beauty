import Cart from "src/assets/cart-bag.svg";
import Logo from "src/assets/logo-yellow.svg";
import LoginBack from "src/assets/login-back.svg";

export const Navbar = () => {
  return (
    <div className="bg-secondary w-full h-[96px] flex justify-between px-10 items-center cursor-pointer">
      <div className="text-primary flex h-1/2 items-center gap-1">
        <img
          src={Cart}
          alt="cart"
        />
        <p>Shop</p>
      </div>
      <img
        src={Logo}
        alt="cart"
        className=""
      />
      <div className="text-primary flex h-1/2 items-center gap-1 cursor-pointer">
        <p>Shop</p>
        <img
          src={LoginBack}
          alt="cart"
        />
      </div>
    </div>
  );
};
