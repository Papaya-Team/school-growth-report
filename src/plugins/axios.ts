import axios from 'axios'

const api = axios.create({
  baseURL: 'https://f6exdiv4w2.execute-api.us-east-1.amazonaws.com/dev/',
  // headers: {
  //   'Content-Type': 'application/json'
  // }
})

export default api
