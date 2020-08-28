import { PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import ApiError from "../Models/ApiError";
import {GenerateUrl} from "./ApiUrl";

const GetUserDetails = async (token) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(GenerateUrl("/api/v1/me"), {}, {Authorization: `Bearer ${token}`})
  } else {
    apiResponse = new ApiResponse({data: dummyPlans()}, 200, null)
  }
  if (apiResponse.isValid()) {
    return apiResponse.body;
  } else {
    let message = `Something went wrong. Please contact support@profilebud.com. Error: ${apiResponse.error}`;
    return new ApiError(message);
  }
};

function dummyPlans() {
  return {
    data: {
      "id": 1,
      "email": "admin@profilemate.com",
      "permissions": [
        "PREMIUM_TRAINING"
      ]
    },
    success: true,
    errors: []
  }
}

export default GetUserDetails
