import { error } from '@sveltejs/kit';
import axios from "axios";

export async function load({ params }) {
    const endpoint = `http://localhost:8080/api/v1/image/${params.slug}`;
    const response = await axios.get(endpoint);


    return response.data;
}
