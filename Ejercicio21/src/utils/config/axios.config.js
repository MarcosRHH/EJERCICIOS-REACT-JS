import axios from 'axios';

// Crear una instancia de Axios con la configuración deseada
const instance = axios.create({
  baseURL: 'https://api.chucknorris.io', 
  responseType: 'json',
  timeout: 10000,
});

export default instance;
