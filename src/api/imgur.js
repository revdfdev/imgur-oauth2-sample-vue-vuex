import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const ROOT_URL = process.env.VUE_APP_ROOT_URL;


export default {
	login() {
		const querystring = {
			client_id: CLIENT_ID,
			response_type: 'token',
		};

		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;

	},
	fetchImages(token) {
		const instance = axios.create({
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return instance.get(`${ROOT_URL}/3/account/me/images`)
	}
}