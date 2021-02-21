import {GetRequest} from "./Requests";
import ApiResponse from "../Models/ApiResponse";
import ApiError from "../Models/ApiError"
import {getPath} from "./ApiUrl";

const GetPlansStripe = async () => {
  let apiResponse;
  if (true || process.env.NODE_ENV !== "development") {
    apiResponse = await GetRequest(getPath("/payment/prices"));
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
    "data": [
      {
        "id": 1,
        "stripe_price_id": "price_1HMF7yGtnJuoZoMjBpNnR0sD",
        "name": "Premium",
        "price_in_cents": 2495.0,
        "accounts": 1,
        "months": 1,
        "created_at": "2020-08-31T16:12:30.961Z",
        "updated_at": "2020-08-31T16:12:30.961Z"
      },
      {
        "id": 3,
        "stripe_price_id": "price_1HMF9pGtnJuoZoMj4pi19z73",
        "name": "Premium agency",
        "price_in_cents": 4700.0,
        "accounts": 5,
        "months": 1,
        "created_at": "2020-08-31T16:12:30.965Z",
        "updated_at": "2020-08-31T16:12:30.965Z"
      },
      {
        "id": 5,
        "stripe_price_id": "price_1HMFE5GtnJuoZoMj2JFjQQ24",
        "name": "Premium",
        "price_in_cents": 14700.0,
        "accounts": 3,
        "months": 12,
        "created_at": "2020-08-31T16:12:30.972Z",
        "updated_at": "2020-08-31T16:12:30.972Z"
      },
      {
        "id": 6,
        "stripe_price_id": "price_1HMFJGGtnJuoZoMjPKp5X1j6",
        "name": "Premium agency",
        "price_in_cents": 49700.0,
        "accounts": 10,
        "months": 12,
        "created_at": "2020-08-31T16:12:30.975Z",
        "updated_at": "2020-08-31T16:12:30.975Z"
      }
    ],
    "success": true,
    "error": null
  }
}

export default GetPlansStripe;
