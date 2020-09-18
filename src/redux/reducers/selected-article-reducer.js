import {SELECTED_ARTICLE} from "../actions/news-actions-types";

export default function selectedArticleReducer(state = null, action) {
    switch (action.type) {
        case SELECTED_ARTICLE:
            return action.payload;
        default:
            return state;
    }
}
