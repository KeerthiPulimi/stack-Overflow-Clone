import axios from 'axios'

const API=axios.create({baseURl:'http://localhost:5000'})

export const logIn = (authData) => API.post('/user/login',authData);
export const signUp = (authData) => API.post('/user/signup',authData);