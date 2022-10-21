import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = '/accounts/'

// Register user
const register = async (userData) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    const response = await axios.post(API_URL + "register/", userData, config)
    return response.data
}

// Login user
const login = async (userData) => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    const response = await axios.post(API_URL + "login/", userData, config)
    return response.data
}

const getCSRFToken = async () => {
    const response = await axios.get(API_URL + "csrf_cookie")
    return response.data
}


const authService = {
    register,
    login,
    getCSRFToken
}

export default authService