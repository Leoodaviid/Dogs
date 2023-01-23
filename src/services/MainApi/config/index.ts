import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json",
});
export default baseApi;
