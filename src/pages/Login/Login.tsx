import { ReactComponent as Logo } from "src/assets/logo.svg";

export const Login = () => {
  return (
    <div className="flex h-screen bg-primary">
      <div className="">
        <div className="px-14 py-14">
          <Logo />
          <div className="font-DMSerif text-secondary pt-10 flex flex-col gap-10">
            <p className="text-xl">Login</p>
            <div className="flex flex-col text-secondary-100 pt-5">
              <label
                htmlFor="email"
                className="text-xs"
              >
                USERNAME
              </label>
              <input
                type="text"
                id="email"
                className="bg-primary border border-x-0 border-t-0 border-b-1 border-secondary "
              />
            </div>
            <div className="flex flex-col text-xs">
              <label htmlFor="email">PASSWORD</label>
              <input
                type="text"
                id="email"
                className="bg-primary border border-x-0 border-t-0 border-b-1 border-secondary"
              />
            </div>
            <button className="border border-secondary rounded-full">
              LOGIN
            </button>
            <div className="flex justify-center">
              LOGIN OR <span className="pl-1 underline">SHOP</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="py-14">
          <img
            src="src/assets/images/login-hero.png"
            alt="login-page"
          />
        </div>
      </div>
    </div>
  );
};
