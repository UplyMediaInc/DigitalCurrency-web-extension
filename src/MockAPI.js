import axios from "axios";

const url = "https://62a25ccccd2e8da9b0071d4e.mockapi.io";


export const getUser = async() => {
    try{
        const response = await axios.get(`${url}/users/1`)
        return response.data;
    } catch(err) {
        console.log(err)
    }
}
export const addUser = async(email, password) => {
   try{ axios.post(`${url}/user`, {
        email: email,
        password: password
    }).then((res) => {
        console.log(res.data);
    })} catch(err){
            console.log(err);
    }
}