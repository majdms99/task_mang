import axios from "axios"

const Register = axios.create({
    baseURL: 'https://sleepy-basin-48024.herokuapp.com/api/auth'
});

export const RegisterAccount = async (data) => {
    return await Register.post('/register', data, {
        headers:
        {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }

    );
}
