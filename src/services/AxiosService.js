import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=NE6xdWvLhXuVUGQ5JwBXtHmEB36l3UhEjbMi3pcL',
  timeout: 3000
})
