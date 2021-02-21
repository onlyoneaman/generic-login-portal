import {PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import ApiError from "../Models/ApiError"
import {getPath} from "./ApiUrl";

const cancelSubscription = async (subscription_id) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(getPath("/cancel_subscription"), {
      subscription_id
    });
  } else {
    apiResponse = new ApiResponse({data: dummyPlans().data}, 200, null)
  }
  if (apiResponse.isValid()) {
    return apiResponse.body;
  } else {
    let message = `Something went wrong. Please contact support@growpad.com. Error: ${apiResponse.error}`;
    return new ApiError(message);
  }
};

function dummyPlans() {
  return {
    "data": {
      "message": "Subscription Cancelled",
      "status": 200
    },
    "success": true,
    "errors": null
  }
}

export default cancelSubscription
