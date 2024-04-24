class DadJokeApi {
    constructor() {
        this.baseUrl = "https://icanhazdadjoke.com";
    }

    async getDadJoke() {
        const response = await axios.get(`${this.baseUrl}`, {
            headers: {
                'Accept': 'application/json',
            },
        });
        return response.data.joke;
    }
}

export default DadJokeApi;
