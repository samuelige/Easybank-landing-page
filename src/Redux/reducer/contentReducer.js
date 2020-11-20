import { v4 as uuidv4 } from 'uuid';
import onlineBank from '../../images/icon-online.svg'
import budget from '../../images/icon-budgeting.svg'
import onboarding from '../../images/icon-onboarding.svg'
import openApi from '../../images/icon-api.svg'
const contentState = {
    contData : [
        {
            id: uuidv4(),
            avatarClassName:'cont-1',
            avatar: onlineBank,
            contentTitle:"Online Banking",
            contentParagraph: `Our modern web and mobile 
                            applications allow you to keep 
                            track of your finances wherever you 
                            are in the world.`
        },
        {
            id: uuidv4(),
            avatarClassName:'cont-2',
            classname: "text",
            avatar: budget,
            contentTitle: "Simple Budgeting",
            contentParagraph: `See exactly where your money
                            goes each month. Receive notifications when you're close to
                            hitting your limits.`
        },
        {
            id: uuidv4(),
            avatarClassName:'cont-3',
            classname: "text",
            avatar: onboarding,
            contentTitle: "Fast Onboarding",
            contentParagraph: `We don't do branches. Open your
            account in minutes online and start
            taking control of your finances right away.`
        },
        {
            id: uuidv4(),
            avatarClassName:'cont-4',
            classname: "text",
            avatar: openApi,
            contentTitle: "Open Api",
            contentParagraph: `Manage your savings, investments, 
            pension, and much more from one 
            account. Tracking your money has 
            never been easier.`
        }
    ]
}

const contentReducer = (state = contentState, action) => {
    return state;

   
}

export default contentReducer

