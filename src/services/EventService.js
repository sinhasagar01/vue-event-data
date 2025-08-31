import axios from 'axios'

// Here, we're creating our API client constant.
// This is the single Axios instance that we can use for our entire app
// The we have go this baseURL property (inside that instance), this is the base URL for all of our calls to use.
// Below that we can add some authentication(withCredentials) and configuration (headers) for communicating with our server

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/sinhasagar01/vue-event-data',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// Now we're exporting a method called getEvents
// It is going to return the Axios API client that we created above
// Which will make a get request and we will pass a string which will add onto the baseURL
export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEventById(id) {
    return apiClient.get('/events/' + id)
  },
}
