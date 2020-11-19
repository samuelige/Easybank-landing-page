import { combineReducers } from "redux";
import contentHeaderReducer from "../reducer/contentHeaderReducer";
import contentReducer from "../reducer/contentReducer";

const rootReducer = combineReducers({
    headContent: contentHeaderReducer,
    contentData: contentReducer,
})

export default rootReducer