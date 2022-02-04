import axios from 'axios';
//www.omdbapi.com/?i=tt3896198&apikey=37ae0c80
export default axios.create({
    baseURL:"http://www.omdbapi.com/",
})