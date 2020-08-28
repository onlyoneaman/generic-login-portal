import ApiError from "../Models/ApiError";

export const ApiUrl = "https://localhost:3000"

export const DevUrl = "https://localhost:3000"

export function GenerateUrl(path) {
  return(ApiUrl+path)
}

let message = "Something went wrong. Error: "

export function ConstructErrorMessage(ApiMessage) {
  return new ApiError(message+ApiMessage)
}