import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.spacexdata.com/v3'
})

export const getPostsPage = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/launches?_page=${pageParam}`, options)
    return response.data
}