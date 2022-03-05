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
