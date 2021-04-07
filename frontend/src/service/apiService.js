import axios from "axios";

export default function getGameData() {

    return axios.get("/questions").then(response => response.data)


}