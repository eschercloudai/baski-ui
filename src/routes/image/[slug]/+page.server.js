import axios from 'axios';
import { env } from '$env/dynamic/private';

export async function load({ params }) {
	const endpoint = env.API_URL + `/api/v1/image/${params.slug}`;
	const response = await axios.get(endpoint);

	return response.data;
}
