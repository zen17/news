import {SELECTED_ARTICLE, LOAD_TOP_ARTICLES} from "./news-actions-types";

export const selectedArticle = (payload) => {
    return {
        type: SELECTED_ARTICLE,
        payload: payload
    }
}

export const loadedTopNews = (payload) => {
    return {
        type: LOAD_TOP_ARTICLES,
        payload: payload
    }
}

