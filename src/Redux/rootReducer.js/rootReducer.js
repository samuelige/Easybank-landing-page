import { combineReducers } from "redux";
import articleReducer from "../reducer/articleReducer";
import contentHeaderReducer from "../reducer/contentHeaderReducer";
import contentReducer from "../reducer/contentReducer";

const rootReducer = combineReducers({
    headContent: contentHeaderReducer,
    contentData: contentReducer,
    articleData: articleReducer
})

export default rootReducer