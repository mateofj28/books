import axios from 'axios'
axios.defaults.baseURL = 'http://dedicadosapi.antartica.jele.site';

export class UserService {

    createUser(data) {
        return axios.post('/api/auth/users/register', data)        
    }

    validateUser(data){
        return axios.post('/api/auth/users/validate', data)
    }

    setPassword(data){
        return axios.post('/api/auth/users/setPassword', data)
    }

    login(data){
        return axios.post('/api/auth/users/login', data)
    }
}    