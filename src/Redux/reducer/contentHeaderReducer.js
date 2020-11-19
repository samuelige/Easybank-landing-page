import { v4 as uuidv4 } from 'uuid';

const contentHeadeerState = {
    id: uuidv4(),
    title:" Next generation digital banking",
    paragraph: `Take your financial life online. Your Easybank account
                will be a one-stop-shop for spending, saving,
                budgeting, investing, and much more.`,
}

const contentHeaderReducer = (state = contentHeadeerState, action)  => {
    return state;
}

export default contentHeaderReducer