import { LOGIN_ACTION, CREATE_USER, ADD_CLASS, ERRORS } from "../actions/";
const initialStater = {
  students: [],
  error: "",
  expiration: "",
  updateCheck: false,
  class: [],
  user: ""
};

const studentReducer = (state = initialStater, action) => {
  switch (action.type) {
    case CREATE_USER:
      return Object.assign({}, state, {
        user: {
          username: action.payload.data.username,
          ID: action.payload.data._id
        },
        updateCheck: true
      });
    case LOGIN_ACTION:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          token: action.payload,
          username: action.username
        },
        // expiration: action.expiration
        error: {}
      });
    case ERRORS:
      return Object.assign({}, state, {
        error: action.payload
      });
    case ADD_CLASS:
      return Object.assign({}, state, {
        students: { ...state.user, username: action.user },
        class: action.class_name
      });
    //When we fetch data, we need to set updateCheck to False
    //It should be set on the first get request, after the login.
    default:
      return state;
  }
};

export default studentReducer;
