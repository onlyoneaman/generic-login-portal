import {RunServer, GenerateUrl} from './ApiMethods'
import {GetRequest} from './Models/Requests'
import ApiResponse from './Models/ApiResponse'

const GetFaqItemsSite = async ({siteAddress, grouped}) => {
    let apiResponse;
    if (RunServer || process.env.NODE_ENV !== "development") {
      apiResponse = await GetRequest(GenerateUrl("/faq_items"), {
          site_address: siteAddress, 
          grouped
      })
    } else {
      apiResponse = new ApiResponse(dummyPlans(), 200, null)
    }
    if (apiResponse.body) {
      return apiResponse.body;
    } else {
      return apiResponse.error
    }
}

function dummyPlans() {
    return {"data":{"faq_items":[{"id":6,"title":"What does Growpad do?","answer":"Growpad automates likes, comments, follows and unfollows to your target audience on instagram like a real human driving up your account's engagement and followers.","faq_group_id":4,"is_live":true,"created_at":"2020-11-25T09:46:07.603Z","updated_at":"2020-11-25T11:35:27.275Z"},{"id":5,"title":"How does Growpad do it and works so well in 2020?","answer":"Growpad EXACTLY replicates human. We provide auto mouse software alongside Growpad which performs these tasks just like human. It manually does the task while you are sleeping/away.","faq_group_id":4,"is_live":true,"created_at":"2020-11-25T08:37:03.666Z","updated_at":"2020-11-25T11:36:02.051Z"},{"id":7,"title":"Do I need any Proxies or VPN?","answer":"No you don't need any VPN or proxy. We exactly replicate human behaviour to engage hence they are not needed?","faq_group_id":4,"is_live":true,"created_at":"2020-11-25T11:46:25.566Z","updated_at":"2020-11-25T11:58:59.343Z"},{"id":8,"title":"How does it target users?","answer":"By likers, commenters and followers of your competitor accounts or by hashtag or by location.","faq_group_id":4,"is_live":true,"created_at":"2020-11-25T11:46:48.291Z","updated_at":"2020-11-25T11:59:11.276Z"}],"faq_groups":[{"id":4,"name":"General","faq_site_id":2,"created_at":"2020-11-25T08:37:03.663Z","updated_at":"2020-11-25T11:34:53.788Z"}]},"success":true,"error":null}
  }
  

export default GetFaqItemsSite