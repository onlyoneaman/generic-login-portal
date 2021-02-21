import {PostRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import ApiError from "../Models/ApiError"
import {getPath} from "./ApiUrl";

const GetCustomer = async (email, password) => {
  let apiResponse;
  if (process.env.NODE_ENV !== "development") {
    apiResponse = await PostRequest(getPath("/payment_login"), {
      email, password
    });
  } else {
    apiResponse = new ApiResponse({data: dummyPlans().data}, 200, null)
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
    "data": {
      "subscription_exists": true,
      "details": {
        "subscription_id": "sub_HwAQxHtq2IYzlT",
        "plan": "Silver",
        "accounts_in_plan": 1,
        "time_in_months": 1,
        "renew_date": "2020-09-30T22:37:40.000Z",
        "accounts": [
          {
            "username": "abhnv_rai",
            "id": "1234"
          }
        ]
      }
    },
    "success": true,
    "error": null
  }
}

export default GetCustomer;
