import customAxios from "src/utils/api";
import { AxiosResponse } from "axios";


export const login = (config = {}): Promise<AxiosResponse> => {
  // const {} = config
  return customAxios({
    url: "/api/v1/token ",
    method: "POST",
    ...config
  });
};
