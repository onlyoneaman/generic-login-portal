import { PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse"
import {GenerateUrl} from "./ApiUrl";

const GetUserDetails = async (token) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(GenerateUrl("/api/v1/me"), {}, {Authorization: `Bearer ${token}`})
  } else {
    apiResponse = new ApiResponse(dummyPlans(), 200, null)
  }
  if (apiResponse.body) {
    return apiResponse.body;
  } else {
    return apiResponse.error;
  }
};

function dummyPlans() {
  return {
    data: {
      "id": 1,
      "email": "admin@website.com",
    },
    success: true,
    errors: []
  }
}

export default GetUserDetails
