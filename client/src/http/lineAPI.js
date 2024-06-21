import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createLine = async (line) => {
    const {data} = await $authHost.post('api/line', line)
    return data
}

export const fetchLine = async () => {
    const {data} = await $host.get('api/line')
    return data
}

export const deleteLine = async (id) => {
    const {data} = await $authHost.delete('api/line/' + id);
    return data;
};

export const updateLine = async (id, line) => {
    const { data } = await $authHost.put(`api/line/${id}`, line);
    return data;
};

export const getAllLine = async (page, limit = 3) => {
    const { data } = await $host.get('api/line', { params: { page, limit } });
    return data.rows;
  };