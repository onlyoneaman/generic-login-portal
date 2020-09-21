import { PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import {GenerateUrl} from "./ApiUrl";

const LoginToken = async (email, password) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(GenerateUrl("/api/v1/login"), {
      email,
      password
    })
  } else {
    apiResponse = new ApiResponse(dummyPlans(), 200, null)
  }
  if (apiResponse.body) {
    return apiResponse.body;
  } else {
    return apiResponse.error
  }
};

function dummyPlans() {
  return {
    data: {
      "token": "Blq_dSbonnLT2e4Hs7F9Kve4RKbFps"
    },
    success: true,
    errors: []
  }
}

export default LoginToken
