import axios from 'axios';
import ApiResponse from "../Models/ApiResponse";
import {logout} from "./Logout";

export const GetRequest = async (url, params = null, headers = null) => {
  try {
    let response = await axios.get(url, {
      params: params,
      headers: headers,
    });
    return new ApiResponse(response.data, response.status, null);
  } catch (e) {
    if (e.response) {
      if(e.response.status === 401) logout()
      return new ApiResponse(null, e.response.status, e.response.data);
    } else {
      return new ApiResponse(null, 500, e.message)
    }
  }
};

export const PostRequest = async (url, data = null, headers = null) => {
  try {
    let response = await axios.post(url, data, {
      headers: headers,
    });
    return new ApiResponse(response.data, response.status, null);
  } catch (e) {
    if (e.response) {
      if(e.response.status === 401) logout()
      return new ApiResponse(null, e.response.status, e.response.data);
    } else {
      return new ApiResponse(null, 500, e.message)
    }
  }
};
