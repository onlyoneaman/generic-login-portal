import { PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import ApiError from "../Models/ApiError";
import {ConstructErrorMessage, GenerateUrl} from "./ApiUrl";

const SendForgotToken = async (email) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(GenerateUrl("/api/v1/forgot_password/send_mail"), {
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
      "message": "Check your Email"
    },
    success: true,
    errors: []
  }
}

export default SendForgotToken
