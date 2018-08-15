import axios from 'axios';


export const CREATE_USER = 'CREATE_USER';
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const UPDATE_USER = 'UPDATE_USER';
export const ERRORS = 'ERRORS';

const ROOT_URL = "http://localhost:4000/api/users/";

export const createUserAction = (obj) => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    let username = obj.username;
    return (dispatch) => {
        axios.post(`${ROOT_URL}register`, obj)
            .then(resp => {
                localStorage.setItem('username', obj.username);
                dispatch({
                    type: CREATE_USER,
                    username: username,
                    payload: resp
                });
            })
            .catch((err) => {
                dispatch({
                    type: ERRORS,
                    payload: err
                })
            })
    }
};

export const loginAction = (obj, history) => {
    //Need to KNow the token expiration
    // let today = new Date();
    // let time = today.getDate();
    // let hours = today.getHours();
    // let minutes = today.getMinutes();
    // let expire
    // if (hours < 12) {
    //     if (hours === 11) {
    //         hours = 12;
    //         if (minutes >= 10) {
    //             expire = hours + ':' + minutes + 'pm';
    //         } else {
    //             expire = hours + ':0' + minutes + 'pm';
    //         }
    //     } else {
    //         hours += 1;
    //         if (minutes >= 10) {
    //             expire = hours + ':' + minutes + 'am';
    //         } else {
    //             expire = hours + ':0' + minutes + 'am';
    //         }
    //     }
    //     //

    // } else {
    //     if (hours === 23) {
    //         hours = 12;
    //         if (minutes >= 10) {
    //             expire = hours + ':' + minutes + 'am';
    //         } else {
    //             expire = hours + ':0' + minutes + 'am';
    //         }

    //     } else {
    //         hours = hours - 12 + 1;
    //         if (minutes >= 10) {
    //             expire = hours + ':' + minutes + 'pm';
    //         } else {
    //             expire = hours + ':0' + minutes + 'pm';
    //         }

    //     }
    // }
    return (dispatch) => {
        axios.post(`${ROOT_URL}login`, obj)
            .then(res => {
                console.log('response', res)
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', obj.username);
                // localStorage.setItem('expiration', expire);
                dispatch({
                    type: LOGIN_ACTION,
                    payload: res.data.token,
                    username: obj.username,
                    // expiration: expire// (Math.floor(Date.now() / 1000) + (60*60))
                });
                //Need to get the correct redirect
                history.push('/')
            })
            .catch((err) => {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                dispatch({ type: ERRORS, payload: err });
            });
    }
};