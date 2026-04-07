import axios from "axios";
import CheckToken from "./CheckToken";
import Logout from "./Logout";

const api = axios.create({
    baseURL: "https://salon-backend-jwt.onrender.com"
});

api.interceptors.request.use((config) => {
    const token = CheckToken();
    if (token) {
        config.headers.Authorization = "Bearer " + token; 
    }
    return config;
    }
);

api.interceptors.response.use(
    res => res,
    err => {
        if ( err.response &&
      (err.response.status === 401 || err.response.status === 403)) {
            Logout();
        }
       
    }
);

export default api;