import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createVacancies = async (vacs) => {
    const {data} = await $authHost.post('api/vacancies', vacs)
    return data
}

export const fetchVacancies = async () => {
    const {data} = await $host.get('api/vacancies')
    return data
}

export const fetchOneVacancies = async (id) => {
    const {data} = await $host.get('api/vacancies/' + id)
    return data
}

export const deleteVacancies = async (id) => {
    const {data} = await $authHost.delete('api/vacancies/' + id);
    return data;
};

export const updateVacancies = async (id, vacancies) => {
    const { data } = await $authHost.put(`api/vacancies/${id}`, vacancies);
    return data;
};

export const getAllVacancies = async (page, limit = 3) => {
    const { data } = await $host.get('api/vacancies', { params: { page, limit } });
    return data.rows; // Извлекаем массив новостей из ответа сервера
  };