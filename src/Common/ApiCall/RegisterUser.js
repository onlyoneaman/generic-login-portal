import { PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import {ConstructErrorMessage, GenerateUrl} from "./ApiUrl";

const RegisterUser = async (email, password) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(GenerateUrl("/api/v1/register"), {
      password,
      email
    })
  } else {
    apiResponse = new ApiResponse({data: dummyPlans()}, 200, null)
  }
  if (apiResponse.isValid()) {
    return apiResponse.body.data;
  } else {
    return ConstructErrorMessage(apiResponse.error)
  }
};

function dummyPlans() {
  return {
    data: {
      "message": "User Registered"
    },
    success: true,
    errors: []
  }
}

export default RegisterUser
