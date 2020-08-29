import { SET_FILTER } from "../Actions/current_filter_action"

const initialState = {//set the initial state

    current: "date"

}

const current_filter = (state = initialState, action: any) => {

    switch (action.type) {

        case SET_FILTER: return { ...state, current: action.payload }

        default:

            return state;
    }

}

export default current_filter
