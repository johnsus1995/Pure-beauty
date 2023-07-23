import customAxios from "src/utils/api";
import { AxiosResponse } from "axios";


export const login = (config = {}): Promise<AxiosResponse> => {
  // const {} = config
  return customAxios({
    url: "/users/sign-in",
    method: "POST",
    ...config
  });
};
