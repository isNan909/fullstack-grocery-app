import axios from 'axios';
import { baseURL } from 'constants/index';
import type { FormData } from 'interface/index';

export const postGroceries = async (data: FormData): Promise<any> => {
  try {
    await axios.post(`${baseURL}` + '/create', data);
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
};

export const deleteGroceries = async (id: String): Promise<any> => {
  try {
    await axios.delete(`${baseURL}` + '/grocery/' + id);
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
};

export const editGroceries = async (
  id: String,
  data: FormData
): Promise<any> => {
  try {
    await axios.put(`${baseURL}` + '/grocery/' + id, data);
  } catch (error) {
    throw new Error(`Error : ${error}`);
  }
};
