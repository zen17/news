import {SELECTED_NEWS, LOAD_TOP_NEWS} from "./news-actions-types";

export const selectedArticle = (payload) => {
    return {
        type: SELECTED_NEWS,
        payload: payload
    }
}

export const loadedTopNews = (payload) => {
    return {
        type: LOAD_TOP_NEWS,
        payload: payload
    }
}

