import axios from "axios";

const API_URL = "https://655ed142879575426b43fa3f.mockapi.io/"


export async function getUser() {
    const {data} = await axios.get(API_URL + "users");
    return data;
}