import axios from "axios";

const baseURL = "http://localhost:3002/"

export default axios.create({
    baseURL,
});