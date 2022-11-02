import axios from "axios"

const Login = axios.create({
    baseURL: 'https://sleepy-basin-48024.herokuapp.com/api/auth'
});

export const LoginAccount = async (data) => {
    return await Login.post('/login', data, {
        headers:
        {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }

    );
}
