import axios from "./AxiosInstanceSeguridad.service";
const login = "/Autenticacion/login";

export const loginUser = async (data) => {
    const response = await axios.post(login, data);
    return response.data;
};
