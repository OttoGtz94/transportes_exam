import axios from 'axios';

const clienteAxios = axios.create({
	baseURL: 'https://api.transporta.app/',
});

export default clienteAxios;
