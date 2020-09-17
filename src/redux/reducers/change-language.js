import {CHANGED_LANGUAGE} from "../actions/news-actions-types";
import {GB_LANGUAGE} from "../../config/constants";

export default function changedLanguageReducer(state = GB_LANGUAGE, action) {
    switch (action.type) {
        case CHANGED_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
}
