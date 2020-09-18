import {SELECTED_COUNTRY} from "../actions/news-actions-types";
import {GB_LANGUAGE} from "../../config/constants";


export default function selectedCountryReducer(state = GB_LANGUAGE, action) {
    switch (action.type) {
        case SELECTED_COUNTRY:
            return action.payload;
        default:
            return state;
    }
}
