import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createMassMedia = async (massm) => {
    const {data} = await $authHost.post('api/massmedia', massm)
    return data
}

export const fetchMassMedia = async () => {
    const {data} = await $host.get('api/massmedia')
    return data
}

export const fetchOneMassMedia = async (id) => {
    const {data} = await $host.get('api/massmedia/' + id)
    return data
}

export const deleteMassMedia = async (id) => {
    const {data} = await $authHost.delete('api/massmedia/' + id);
    return data;
};

export const updateMassMedia = async (id, massmedia) => {
    const { data } = await $authHost.put(`api/massmedia/${id}`, massmedia);
    return data;
};

export const getAllMassMedia = async (page, limit = 3) => {
    const { data } = await $host.get('api/massmedia', { params: { page, limit } });
    return data.rows;
  };