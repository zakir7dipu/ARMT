import axios from "axios";

const instance = axios.create({

    baseURL: "http://server.bizzsol.com.bd"
});

export default instance;