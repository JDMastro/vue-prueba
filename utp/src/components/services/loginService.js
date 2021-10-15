import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:3000/api";

export default {
    async login(email, password) {
        const user = { usuario : email, password };
        return await axios.post(ENDPOINT_PATH + "/login", user);
    }
};