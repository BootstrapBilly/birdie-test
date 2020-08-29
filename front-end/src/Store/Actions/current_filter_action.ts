export const SET_FILTER = "API_SET_FILTERRESPONSE";

export const set_filter = (type: string) => {

    return async (dispatch: any) => {

        try {

            return dispatch({ type: SET_FILTER, payload: type })//if successful, send the response to the reducer

        }

        catch (error) {

            return dispatch({ type: SET_FILTER, payload: "none" })//if it failed, send the error to the reducer

        }

    }

}
