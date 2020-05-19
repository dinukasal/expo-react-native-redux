import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../types'
const INITIAL_STATE = {
    user: {
        name: '',
        isLoggedIn: false,
        token: null,
        loading: true
    }
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loading: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                loading: false
            }
        default:
            return state
    }
};