/* import axios from "axios";

const baseURL = "http://localhost:3002/"

export default axios.create({
    baseURL,
});
import axios from "axios";

//const baseURL = "http://localhost:3002/"
//NODE_ENV = 'production'

const baseURL = process.env.NODE_ENV === "production" 
 ? "api/v1/CareCalories"
 : "http://localhost:3002/api/v1/CareCalories";

export default axios.create({
    baseURL,
});*/

import axios from "axios";

const baseURL = "http://localhost:3002/"

export default axios.create({
    baseURL,
});