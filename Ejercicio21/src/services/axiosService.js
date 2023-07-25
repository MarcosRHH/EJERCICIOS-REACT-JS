import APIRequest from '../utils/config/axios.config';


export function getRandomJoke() {
    return APIRequest.get('/jokes/random', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }); // https://api.chucknorris.io/jokes/random
}

