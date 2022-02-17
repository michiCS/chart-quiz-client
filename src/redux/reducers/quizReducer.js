import initialState from '../initialState';

const quizReducer = (state, action) => {
    switch(action.type) {
        case "LOG_IN":
            return Object.assign({}, state, {user: action.payload})
        case "LOG_OUT":
            return Object.assign({}, state, initialState);
        case "SET_TOTAL_ROUNDS":
            return Object.assign({}, state, {totalRounds: action.payload});
        case "NEXT_ROUND":
            return Object.assign({}, state, {currentRound: state.currentRound + 1});
        case "UPDATE_SCORE":
            return Object.assign({}, state, {score: state.score + action.payload});
        case "FINISHED":
            return Object.assign({}, state, {finished: true});
        case "PLAY_AGAIN":
            return Object.assign({}, initialState, {user: state.user, totalRounds: state.totalRounds});
        case "SET_BLINKING_ID":
            return Object.assign({}, state, {blinkingId: action.payload});
        default:
            return state;
    }
}

export default quizReducer;