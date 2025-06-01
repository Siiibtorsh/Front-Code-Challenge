import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

class ApiClient {
   static async get(endpoint) {
      try {
         const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
         return response.data;
      } catch (error) {
         throw this.handleError(error);
      }
   }

   static async post(endpoint, data) {
      try {
         const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
         return response.data;
      } catch (error) {
         throw this.handleError(error);
      }
   }

   static async put(endpoint, data) {
      try {
         const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data);
         return response.data;
      } catch (error) {
         throw this.handleError(error);
      }
   }

   static async delete(endpoint) {
      try {
         const response = await axios.delete(`${API_BASE_URL}/${endpoint}`);
         return response.data;
      } catch (error) {
         throw this.handleError(error);
      }
   }

   static handleError(error) {
      if (error.response) {
         return {
            status: error.response.status,
            message: error.response.data.message || 'An error occurred',
            data: error.response.data
         };
      }
      return {
         status: 500,
         message: 'Network error occurred',
         data: null
      };
   }
}

export default ApiClient;
