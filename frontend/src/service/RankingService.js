import axios from "axios";

export default function getUserData() {

    return axios.get("/userData").then(response => response.data)


}