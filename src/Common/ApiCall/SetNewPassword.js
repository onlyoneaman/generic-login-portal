import { PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse"
import {GenerateUrl} from "./ApiUrl";

const SetNewPassword = async (token, password) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(GenerateUrl("/api/v1/forgot_password/send_mail"), {
      token,
      password
    })
  } else {
    apiResponse = new ApiResponse({data: dummyPlans()}, 200, null)
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
      "message": "Password Changed"
    },
    success: true,
    errors: []
  }
}

export default SetNewPassword
