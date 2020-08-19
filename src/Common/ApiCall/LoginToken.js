import { PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import ApiError from "../Models/ApiError";

const LoginToken = async (email, password) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest("https://localhost:3000/api/v1/login", {
      email,
      password
    })
  } else {
    apiResponse = new ApiResponse({data: dummyPlans()}, 200, null)
  }
  if (apiResponse.isValid()) {
    return apiResponse.body.data;
  } else {
    let message = `Something went wrong. Please contact support@profilebud.com. Error: ${apiResponse.error}`;
    return new ApiError(message);
  }
};

function dummyPlans() {
  return {
    "token": "Blq_dSbonnLT2e4Hs7F9Kve4RKbFps"
  }
}

export default LoginToken
