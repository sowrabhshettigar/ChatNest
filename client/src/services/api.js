import axios from 'axios';

const API= axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const setAuthToken = (token) => {
    if(token)
    {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else{
        delete API.defaults.headers.common['Authorization'];
    }
}; 

export const registerUser= async (userData)=>{
    const response = await API.post('/users/register', userData);
    return response.data;
}

export const userLogin= async (userData)=>{
    const response= await API.post('/users/login',userData);
    return response.data;
}

export const getUserProfile= async ()=>{
    const response = await API.get('/users/profile');
    return response.data;
}
