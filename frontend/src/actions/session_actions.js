import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_SIGNIN = "RECEIVE_SIGNIN";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const receiveSignin = () => ({
    type: RECEIVE_SIGNIN
})

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

const loginHelper = (res, dispatch) => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded))
}


export const signup = (user) => dispatch => (
    APIUtil.signup(user).then(res => {
        loginHelper(res, dispatch)
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })

)

export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        loginHelper(res, dispatch)    
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};