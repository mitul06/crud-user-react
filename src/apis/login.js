import axios from 'axios';

export const loginApp = async (data) => {
    const res = await axios.post(`https://reqres.in/api/login`, data)
    console.log(res, "data in api")
    return res
}

export const createUser = async (data) => {
    const res = await axios.post(`https://reqres.in/api/users`, data)
    console.log(res, "data in api")
    return res
}

export const getAllUser = async () => {
    const res = await axios.get(`https://reqres.in/api/users?page=2`)
    return res
}

export const deleteUser = async (id) => {
    const res = await axios.delete(`https://reqres.in/api/users/${id}`)
    return res
}

