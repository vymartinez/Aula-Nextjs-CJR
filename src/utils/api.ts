import { User } from '@/types/User';
import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3001",
})

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get('/user');
    return response.data;
}

export const getOneUser = async (id: number): Promise<User> => {
    const response = await api.get(`/user/${id}`);
    return response.data;
}

export const createUser = async (user: Partial<User>) => {
    const response = await api.post("/user",{
        name: user.name,
        email: user.email,
        department: "CIC",
        course: "Agronomia",
        password: "123435dsgg"
    });
    return response.data;
}

export const patchUserReq = async (user: Partial<User>, id: number) => {
    api.patch(`/user/${id}`, {
        name: user.name,
        email: user.email
    }, {
        headers: {
            Authorization: `Bearer ${"ivh54n54u5bw4ú2454p4t34´"}`
        }
    });
}

export const deleteUserReq = async (id: number) => {
    await api.delete(`/user/${id}`)
}