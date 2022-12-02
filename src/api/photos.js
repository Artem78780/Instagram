import { makeReques } from "./makeRequest";

const URL = '/posts'

export const getPhotos = (config) => makeReques({
    method: 'GET',
    url: URL,
    ...config,
})