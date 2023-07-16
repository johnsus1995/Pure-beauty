import { ReactComponent as Logo } from "src/assets/logo.svg";

export const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-primary w-1/3">
        <div className="">
          <Logo />
          <div className="font-DMSerif">
            <p>Login</p>
            <div className="flex flex-col">
              <label htmlFor="email">USERNAME</label>
              <input type="text" id="email"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">PASSWORD</label>
              <input type="text" id="email"/>
            </div>
            <button>LOGIN</button>
            <div className="">
              LOGIN OR <span>SHOP</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-400 w-full">right</div>
    </div>
  );
};
