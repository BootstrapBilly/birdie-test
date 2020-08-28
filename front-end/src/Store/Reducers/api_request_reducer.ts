import { API_RESPONSE } from "../Actions/api_request_action"

const initialState = {//set the initial state

    response: null

}

type Action = {type: "API_RESPONSE", payload:object}

const api_request_reducer = (state = initialState, action: Action) => {

    switch (action.type) {

        case API_RESPONSE: return { ...state, response: action.payload }

        default:

            return state;
    }

}

export default api_request_reducer
