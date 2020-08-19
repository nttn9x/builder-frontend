import axios from "axios";

const PROJECT = "/projects";

export const addProject = async (data: any) => {
  return await axios.post(PROJECT, data);
};

export const publishProject = async (id: any) => {
  return await axios.post(`${PROJECT}/${id}/publish`);
};
