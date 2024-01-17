import axios from 'axios';
import { env } from '$env/dynamic/private';

export async function load() {
	const endpoint = env.API_URL + `/api/v1/images`;
	const response = await axios.get(endpoint);

	return { "data": response.data };
}
