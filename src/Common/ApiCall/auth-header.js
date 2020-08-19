export default function authHeader() {
  //const user = JSON.parse(localStorage.getItem('authToken'));
  const token = localStorage.getItem('authToken');
  if(token) {
    // for Node.js Express back-end
    // return { 'x-access-token': user.accessToken };
    //return {Authorization: 'Bearer ' + token}
    return {Authorization: `Bearer ` + token}
  }
  else {
    return {

    } ;
  }
}
