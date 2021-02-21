import {GetRequest} from "./Requests";
import UserDetails from "../Models/UserDetails";
import ApiError from "../Models/ApiError";
import SendNotification from "../Utils/SendNotification";
import NotificationTypeEnum from "../Models/NotificationTypeEnum";

const GetIgDataFromUsername = async (username) => {
  let url = `https://www.instagram.com/${username}/?__a=1`;
  // console.log(url, 'Class: , Function: , Line 7 url(): ');
  let r, response;
  try {
    r = await fetch("https://www.instagram.com/" + username + "/?__a=1", {
      credentials: "omit"
    });

    let data;
    if (r.ok) {
      data = await r.json();
    } else if (r.status === 404) {
      return new ApiError("User does not exist");
    } else {
      throw new Error("Anonymysed Call failed");
    }
    return new UserDetails(data);

  } catch (e) {
    // sendNotification(NotificationTypeEnum.Success, "Please use a VPN. Eg: Browsec chrome extension");
    try {
      let userDetailsRequest = await GetRequest(url, null, null);
      if (userDetailsRequest.isValid()) {
        return new UserDetails(userDetailsRequest.body);
      } else {
        let message = `User does not exist`;
        if (userDetailsRequest.status !== 404) {
          throw new Error("Private call also failed");
        }
        return new ApiError(message);
      }
    } catch(e) {
      let profileBudURL = "https://api.growpad.io/growpad/api/v1/detailed_user?username="+username
      let userDetailsRequest = await GetRequest(profileBudURL, null, null);
      if (userDetailsRequest.isValid()) {
        let data = {
          graphql: {
            user: userDetailsRequest.body.data
          }
        };
        return new UserDetails(data);
      } else {
        return new ApiError("Something went wrong");
      }
    }

  }



};

export default GetIgDataFromUsername;
