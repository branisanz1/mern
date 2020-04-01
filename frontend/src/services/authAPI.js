import axios from 'axios';
import jwtDecode from 'jwt-decode';

function authenticate(credentials) {
  return axios
    .post('http://localhost:3000/person/login', credentials)
    .then(response => response.data.token)
    .then(token => {
      window.localStorage.setItem('authToken', token);
      axios.defaults.headers['Authorization'] = token;
      return true;
    });
}

function register(credentials) {
  return axios
    .post('http://localhost:3000/person/signup', credentials)
    .then(response => console.log(response))
    .then(response => {
      return true;
    });
}

function logout() {
  window.localStorage.removeItem('authToken');
  delete axios.defaults.headers['Authorization'];
}

// Verifie si un token existe dans le localStorage
function setup() {
  const token = window.localStorage.getItem('authToken');
  if (token) {
    const jwtData = jwtDecode(token);
    if (jwtData.exp * 1000 > new Date().getTime()) {
      axios.defaults.headers['Authorization'] = token;
    } else {
      logout();
    }
  } else {
    logout();
  }
}

function isAuthenticated() {}

export default {
  authenticate,
  register,
  logout,
  setup,
  isAuthenticated
};
