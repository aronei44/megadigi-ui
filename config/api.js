import axios from "axios";


async function callAPI({ path, method, data, token, formData }) {
  const headers = token
    ? {
        'Content-Type': `${formData ? 'multipart/form-data' : 'application/json'}`,
        Accept: `${formData ? 'multipart/form-data' : 'application/json'}`,
        Authorization: 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*',
      }
    : {
        'Content-Type': `${formData ? 'multipart/form-data' : 'application/json'}`,
        Accept: `${formData ? 'multipart/form-data' : 'application/json'}`,
        'Access-Control-Allow-Origin': '*',
      };

    const response = await axios({
        url: process.env.API_ENDPOINT + path,
        method,
        data,
        headers,
    }).catch((err) => err.response);

    if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/';
    } else {
        return response;
    }

}
export default callAPI;
