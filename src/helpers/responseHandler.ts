import { AxiosResponse } from "axios";

interface ErrorResponse {
  response: {
    status: number;
    data: object;
  };
}

export function apiErrorHandler(err: ErrorResponse) {
  if (err.response) {
    switch (err.response.status) {
      case 500:
        console.log(err.response);
        break;
      case 503:
        window.location.href = "/maintenance";
        return;
      case 400:
        return err.response;
      case 404:
        return err.response;
      // window.location.href = "/404";
      case 401:
        // localStorage.clear();
        // setTimeout(() => {
        //   window.location.href = "/login";
        // }, 600);
        break;
      default:
        break;
    }

    return err.response.data;
  }
  return new Error("Unexpected Error Occurred!");
}

export function apiSuccessHandler(res: AxiosResponse) {
  return res;
}
