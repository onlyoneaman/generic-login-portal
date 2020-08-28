import { PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import {ConstructErrorMessage, GenerateUrl} from "./ApiUrl";

const ValidateForgotToken = async (token) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(GenerateUrl("/api/v1/forgot_password/validate"), {
      token
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
      "token_validity": true
    },
    success: true,
    errors: []
  }
}

export default ValidateForgotToken
