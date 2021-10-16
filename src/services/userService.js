import axios from "axios"

export default class UserService{
getUsers(){
    return axios.get("https://dummyapi.io/data/v1/user?limit=10", {
        headers:{ 'app-id': '615ef6ff48d0b4ac691c3648'}
    });
  }
  getByUserId(id){
    return axios.get("https://dummyapi.io/data/v1/user/"+id, {
        headers:{ 'app-id': '615ef6ff48d0b4ac691c3648'}
    });
  }
}