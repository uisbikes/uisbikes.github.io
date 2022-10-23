import axios from "axios";

export default axios.create({
  baseURL:
    "https://us-east-1.aws.data.mongodb-api.com/app/application-0-ukxnp/endpoint/bikes",
  headers: {
    "Content-type": "application/json",
  },
});
