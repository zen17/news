import {
    SELECTED_ARTICLE,
    LOAD_TOP_ARTICLES,
    LOAD_TOP_ARTICLES_BY_CATEGORY,
    SELECTED_COUNTRY, SELECTED_ARTICLES_CATEGORY
} from "./news-actions-types";

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

export const loadedTopArticlesByCategoryAction = (payload) => {
    return {
        type: LOAD_TOP_ARTICLES_BY_CATEGORY,
        payload: payload
    }
}

export const selectedCountryAction = (payload) => {
    return {
        type: SELECTED_COUNTRY,
        payload: payload
    }
}

export const selectedArticlesCategoryAction = (payload) => {
    return {
        type: SELECTED_ARTICLES_CATEGORY,
        payload: payload
    }
}


