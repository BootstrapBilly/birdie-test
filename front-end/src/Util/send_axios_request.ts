import axios from "axios"

//export const production = "http://localhost:8000/"//dev
export const production = "https://birdie-test-billy.herokuapp.com/"//production


const send_axios_request = (url:string, body:object, type?:string) => {

    if (type === "get") return axios.get(`${production}${url}`)
    
    else return axios.post(`${production}${url}`, body)

}

export default send_axios_request

