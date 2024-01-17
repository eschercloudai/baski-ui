import { error } from '@sveltejs/kit';
import axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';

export async function load({ params }) {
	const endpoint = PUBLIC_API_URL + `/api/v1/image/${params.slug}`;
	const response = await axios.get(endpoint);

	return response.data;
}
