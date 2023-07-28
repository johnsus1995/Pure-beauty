import { useNavigate } from "react-router-dom";
import Logo from "src/assets/logo.svg";
import { useAppDispatch } from "src/hooks/hooks";
import * as authActions from "src/store/auth/actions"

interface loginResponse {
    jwt_token:string
}

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const onLogin = async () => {
    const reqData = {
      username:"wpcustomer",
      password:"l!rDymqRgR1aG)MxC^XF%v9$"
    }
   const res =  await dispatch(authActions.login({data:reqData}))
   if((res.payload as loginResponse).jwt_token){
      navigate("/shop")
   }
  }

  return (
    <div className="flex h-screen bg-primary">
      <div className="w-1/2">
        <div className="px-14 py-14">
          <img src={Logo} alt="" />
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
                className="bg-primary border border-x-0 border-t-0 border-b-1 border-secondary outline-none"
              />
            </div>
            <div className="flex flex-col text-xs">
              <label htmlFor="email">PASSWORD</label>
              <input
                type="text"
                id="email"
                className="bg-primary border border-x-0 border-t-0 border-b-1 border-secondary outline-none"
              />
            </div>
            <button onClick={onLogin} className="border border-secondary rounded-full">
              LOGIN
            </button>
            <div className="flex justify-center">
              LOGIN OR <span className="pl-1 underline">SHOP</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="py-20 flex">
          <img
            src="src/assets/images/login-hero.png"
            alt="login-page"
            className="rounded-tl-3xl rounded-bl-3xl"
          />
        </div>
      </div>
    </div>
  );
};
