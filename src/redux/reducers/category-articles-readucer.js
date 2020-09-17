import {LOAD_TOP_ARTICLES_BY_CATEGORY} from "../actions/news-actions-types";

export default function categoryArticlesReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_TOP_ARTICLES_BY_CATEGORY:
            let category = {...state};
            category[action.payload.category.value] =action.payload.articles;
            return category
        default:
            return state;
    }
}
