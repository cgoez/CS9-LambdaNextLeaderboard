<<<<<<< HEAD:leaderboard-frontend/src/reducers/index.js
import { LOGIN_ACTION, CREATE_USER, ADD_CLASS, ERRORS}  from '../actions/actions'
=======
import { LOGIN_ACTION, CREATE_USER}  from '../actions'
>>>>>>> ae8c16e5361c040e78585f83bd340ecdabacb4de:leaderboard-frontend/src/reducers/index.js
const initialStater = {
    students: [],
    error: '',
    expiration: '',
    updateCheck: false,
    class : []

}

const studentReducer = (state = initialStater, action) => {
    switch (action.type) {
        case CREATE_USER:
            return (Object.assign({}, state, {
                user: { username: action.payload.data.username, ID: action.payload.data._id },
                updateCheck: true
            }));
        case LOGIN_ACTION:
            return (Object.assign({}, state, {
                user: { ...state.user, token: action.payload, username: action.username, ID: action.Id },
                expiration: action.expiration
            }));
<<<<<<< HEAD:leaderboard-frontend/src/reducers/index.js
        case ERRORS:
            return (Object.assign({}, state, {
                error: action.payload
            } ))
        case ADD_CLASS:
            return (Object.assign({}, state, {
                students: {...state.user, username: action.user },
                class: action.class_name
            }))
=======
>>>>>>> ae8c16e5361c040e78585f83bd340ecdabacb4de:leaderboard-frontend/src/reducers/index.js
        //When we fetch data, we need to set updateCheck to False
        //It should be set on the first get request, after the login.
        default:
            return state;
    }
}

export default studentReducer;

