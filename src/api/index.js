import axios from 'axios';

export const getList = page => {
	return axios.post('http://localhost:8090/api/list', page);
};

export const testApi = () => {
	return axios.get('https://jsonplaceholder.typicode.com/posts');
};
