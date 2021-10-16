import axios from "axios"

export default class PostService{
    getPosts(){
        return axios.get("https://dummyapi.io/data/v1/post?limit=10", {
            headers:{ 'app-id': '615ef6ff48d0b4ac691c3648'}

        });

    }

}