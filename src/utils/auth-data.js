// return authorization data with jwt token
const authData = () => {
  const accessToken = JSON.parse(localStorage.getItem('access_token'));
  const client = JSON.parse(localStorage.getItem('client'));
  const expiry = JSON.parse(localStorage.getItem('expiry'));
  const uid = JSON.parse(localStorage.getItem('uid'));

  const data = {};

  if (accessToken) {
    data.accessToken = accessToken;
  }
  if (client) {
    data.client = client;
  }
  if (expiry) {
    data.expiry = expiry;
  }
  if (uid) {
    data.uid = uid;
  }

  return data;
};

export default authData;
