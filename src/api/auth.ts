import customAxios from "src/utils/api";

export const login = (config={}) => {
  // const {} = config
  return customAxios({
    url: "/users/signin",
    method: "POST",
    ...config
  });
};