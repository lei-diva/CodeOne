const userRefReducer = (state="init", action) => {
    switch(action.type){
        case 'UPDATE_USER_REF':
            return action.payload;
        default:
            return state;
    }
}

export default userRefReducer;