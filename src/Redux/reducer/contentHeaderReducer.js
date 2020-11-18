import { v4 as uuidv4 } from 'uuid';

const contentHeadeerState = {
    id: uuidv4(),
    title:" Next generation",
    subTitle:"digital banking",
    paragraph: `Take your financial life online. Your Easybank account`,
    firstSubParagraph:"will be a one-stop-shop for spending, saving,",
    secondSubParagraph:"budgeting, investing, and much more.",
}

const contentHeaderReducer = (state = contentHeadeerState)  => {
    return state;
}

export default contentHeaderReducer