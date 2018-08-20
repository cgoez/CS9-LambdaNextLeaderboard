import axios from "axios";

export const CREATE_USER = "CREATE_USER";
export const LOGIN_ACTION = "LOGIN_ACTION";
export const UPDATE_USER = "UPDATE_USER";
export const ADD_CLASS = "ADD_CLASS";
export const ADD_STUDENT = "ADD_STUDENT";
export const ERRORS = "ERRORS";

const USER_URL = "http://localhost:4000/api/users/";
const CLASS_URL = "http://localhost:4000/api/classes/";

export const createUserAction = obj => {
  return dispatch => {
    axios
      .post(`${USER_URL}register`, obj)
      .then(resp => {
        dispatch({
          type: CREATE_USER,
          username: resp.data.username,
          user_id: resp.data._id
        });
      })
      .catch(err => {
        dispatch({
          type: ERRORS,
          payload: err.response.data
        });
      });
  };
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
  return dispatch => {
    axios
      .post(`${USER_URL}login`, obj)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem('expiration', expire);
        dispatch({
          type: LOGIN_ACTION,
          successfulLogin: res.data.success,
          payload: res.data.token,
          username: res.data.username
          // expiration: expire// (Math.floor(Date.now() / 1000) + (60*60))
        });
        //Need to get the correct redirect
        history.push("/");
        window.location.reload();
      })
      .catch(err => {
        localStorage.removeItem("token");
        dispatch({ type: ERRORS, payload: err.response.data });
      });
  };
};

export const addClass = obj => {
  const token = localStorage.getItem("token");
  return dispatch => {
    const optionTwo = {
      method: "POST",
      headers: { "content-type": "application/json", Authorization: token },
      data: obj,
      url: `${CLASS_URL}addclass`
    };

    axios(optionTwo)
      .then(resp => {
        localStorage.setItem("user", resp.data.name);
        dispatch({
          type: ADD_CLASS,
          user: resp.data.name,
          class_name: resp.student
        });
      })
      .catch(err => dispatch({ type: ERRORS, payload: err }));
  };
};
export const addStudent = obj => {
  const token = localStorage.getItem("token");
  return dispatch => {
    const optionTwo = {
      method: "PUT",
      headers: { "content-type": "application/json", Authorization: token },
      data: obj,
      url: `${USER_URL}addclass`
    };

    axios(optionTwo)
      .then(resp => {
        // localStorage.setItem('user', resp.data.name)
        dispatch({
          type: ADD_STUDENT,
          user: resp.data.name,
          class_name: resp.student
        });
      })
      .catch(err => dispatch({ type: ERRORS, payload: err }));
  };
};
