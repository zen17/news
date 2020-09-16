import {LOAD_TOP_ARTICLES} from "../actions/news-actions-types";

export default function articlesReducer(state = [], action) {
    switch (action.type) {
        case LOAD_TOP_ARTICLES:
            return action.payload
        default:
            return state;
    }
}
