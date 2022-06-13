import axios from './axios';

class VoyageService {
	async getEpisodes(url: string) {
		return await axios.get(url);
	}

	async getEpisode(param: number) {
		return await axios.get(`/episode/${param}`);
	}

	async getCharacter(url: string) {
		return await axios.get(url);
	}
}

export default new VoyageService();
