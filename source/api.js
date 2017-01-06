import fetch from 'isomorphic-fetch'

const baseUrl = 'https://jsonplaceholder.typicode.com'

const api {
  post: {
    async getList(page = 1) {
      const response = await fetch(`${baseUrl}/post?_page=${page}`)
      const data = await response.json();
      return data
    },
    async getSingle(id = 1){
      const response = await fetch(`${baseUrl}/post/${id}`)
      const data = await response.json();
      return data
    },
    async getComment(id = 1){
      const response = await fetch(`${baseUrl}/post/${id}/comments`)
      const data = await response.json();
      return data
    },
  },
  users: {
    async getSingle(id = 1){
      const response = await fetch(`${baseUrl}/user/${id}`)
      const data = await response.json();
      return data
    },
  },
}

export default api
