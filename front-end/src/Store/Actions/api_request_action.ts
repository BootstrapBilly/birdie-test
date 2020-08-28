import send_axios_request from "../../Util/send_axios_request"

export const API_RESPONSE = "API_RESPONSE";

export const api_request = (url: string, payload: object, type?: string) => {

    let request = send_axios_request(url, payload)//define the request to be sent 

    //if a request type has been supplied, e.g. "get" send the specified req type, if not post is sent by default
    if (type) { request = send_axios_request(url, payload, type) }

    return async (dispatch: any) => {

        try {

            const response = await request//send the request to the api and wait for the response     

            if (response.data) return dispatch({ type: API_RESPONSE, payload: response })//if successful, send the response to the reducer

        }

        catch (error) {

            return dispatch({ type: API_RESPONSE, payload: error.response })//if it failed, send the error to the reducer

        }

    }

}
