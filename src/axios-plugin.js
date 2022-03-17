import axios from "axios";

const instance = axios.create({

    baseURL: "https://demo4.savar121gps.com/"
});

export default instance;