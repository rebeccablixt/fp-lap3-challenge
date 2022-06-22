const initState = { username: "", result: ""};

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return initState;
    };
};

export default searchReducer;
