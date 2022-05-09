import axios from '../axios';

const handleLoginApi =(userEmail, userPassword) => {
     return axios.post('/api/login',{email: userEmail, password: userPassword});
} 

const getAllUsers = (inputId) => {
     return axios.get(`/api/get-all-users?id=${inputId}`) ///api/get-all-users
}
const createNewUserService = (data) => {
     return axios.post('/api/create-new-user', data)  //'/api/create-new-user',
}
const deletUserService = (userId) => {
     return axios.delete('/api/delete-user', {
          data: {
            id: userId,
          }
        });
}
const editUserService = (inputData) => {
     return axios.put('/api/edit-user', inputData)
         
}
const getAllCodeService = (inputType) => {
     return axios.get(`/api/allcode?type=${inputType}`) 
}
export { handleLoginApi, getAllUsers, createNewUserService, deletUserService, editUserService, getAllCodeService }