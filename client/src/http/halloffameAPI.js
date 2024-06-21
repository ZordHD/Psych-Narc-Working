import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createHallOfFame = async (hof) => {
    const {data} = await $authHost.post('api/halloffame', hof)
    return data
}

export const fetchHallOfFame = async (page, limit=8) => {
    const {data} = await $host.get('api/halloffame', {params: {
        page, limit
    }})
    return data
}

export const fetchOneHallOfFame = async (id) => {
    const {data} = await $host.get('api/halloffame/' + id)
    return data
}

export const deleteHallOfFame = async (id) => {
    const {data} = await $authHost.delete('api/halloffame/' + id);
    return data;
};

export const updateHallOfFame = async (id, halloffame) => {
    const { data } = await $authHost.put(`api/halloffame/${id}`, halloffame);
    return data;
};

export const getAllHallOfFame = async (page, limit = 3) => {
    const { data } = await $host.get('api/halloffame', { params: { page, limit } });
    return data.rows;
  };