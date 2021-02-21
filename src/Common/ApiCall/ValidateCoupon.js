import {PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import ApiError from "../Models/ApiError"
import {getPath} from "./ApiUrl";

const ValidateCoupon = async (coupon_code) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(getPath("/validate_coupon"), {
      coupon_code
    });
  } else {
    apiResponse = new ApiResponse({data: dummyPlans().data}, 200, null)
  }
  if (apiResponse.isValid()) {
    return apiResponse.body.data;
  } else {
    let message = `Something went wrong. Please contact support@growpad.com. Error: ${apiResponse.error}`;
    return new ApiError(message);
  }
};

function dummyPlans() {
  return {
    "data": {
      "is_valid": true,
      "percentage_discount": 25
    },
    "success": true,
    "error": null
  }
}

export default ValidateCoupon