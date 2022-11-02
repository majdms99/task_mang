import axios from "axios"

const Task = axios.create({
    baseURL: 'https://sleepy-basin-48024.herokuapp.com/api'
});

const token = localStorage.getItem('api_token');
// console.log('token', token)

export const CreateTask = async (data) => {
    return await Task.post('/task', data, {
        headers:
        {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    );
}
export const Tasks = async () => {
    return await Task.get('/tasks', {
        headers:
        {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    );
}

export const DeleteTask = async (id) => {
    return await Task.delete(`/task/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    )

}
export const AddComplete = async (id) => {
    return await Task.post(`/task_complate/${id}`, {}, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    )

}
export const RemoveComplete = async (id) => {
    return await Task.post(`/task_not_complate/${id}`, {}, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    )

}
