export default function authHeader() {
    if (localStorage.user) {
      const userToken = JSON.parse(localStorage.user).access_token;
  
      return { Authorization: `Bearer ${userToken}` };
    }
    return false
  }
  