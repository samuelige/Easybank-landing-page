import { combineReducers } from "redux";
import contentHeaderReducer from "../reducer/contentHeaderReducer";

const rootReducer = combineReducers({
    headContent: contentHeaderReducer,
})

export default rootReducer