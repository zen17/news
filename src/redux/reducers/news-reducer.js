export default function newsReducer(state = [], action) {
    switch (action.type) {
        case 'SELECTED_NEWS':
            return {...state, selectedArticle: action.payload};
        case 'LOAD_TOP_NEWS':
            console.log('333',action.payload)
            return action.payload
        default:
            return state;
    }
}
