import ApiClient from './api';

export const fetchUsers = async (page, limit) => {
   const response = await ApiClient.get(`users?_page=${page}&_limit=${limit}`);
   await new Promise(resolve => setTimeout(resolve, 1000)); // Keeping the 1s delay
   return response;
};
