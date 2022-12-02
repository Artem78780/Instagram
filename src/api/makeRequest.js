import axios from 'axios'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com'

export const makeReques = (config) => {
    config.url = `${API_ENDPOINT}${config.url}`

    return axios(config)
}