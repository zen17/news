import {SELECTED_ARTICLE, LOAD_TOP_ARTICLES} from "./news-actions-types";

export const selectedArticleAction = (payload) => {
    return {
        type: SELECTED_ARTICLE,
        payload: payload
    }
}

export const loadedTopArticlesAction = (payload) => {
    return {
        type: LOAD_TOP_ARTICLES,
        payload: payload
    }
}

