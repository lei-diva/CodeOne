import {combineReducers} from 'redux';
import currentUserReducer from './currentUser';
import userRefReducer from './userRef';
import playgroundReducer from './playground';

const rootReducers = combineReducers({
    currentUser: currentUserReducer,
    userRef: userRefReducer,
    playground: playgroundReducer

});

export default rootReducers;