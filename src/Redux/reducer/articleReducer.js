import { v4 as uuidv4 } from 'uuid';
import currency from '../../images/image-currency.jpg'
import restaurant from '../../images/image-restaurant.jpg'
import plane from '../../images/image-plane.jpg'
import confetti from '../../images/image-confetti.jpg'

const INITIAL_ARTICLE_STATE = [
    {
        id: uuidv4(),
        className: "first-image",
        image:currency,
        reference: "By Claire Robinson",
        header: 'Receive money in any currency with no fees',
        text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … "
    },
    {
        id: uuidv4(),
        className: 'sec-image',
        image:restaurant,
        reference: "By Wilson Hutton",
        header: 'Treat yourself without worrying about money',
        text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
    {
        id: uuidv4(),
        className: "third-image",
        image:plane,
        reference: "By Wilson Hutton",
        header: 'Take your Easybank card wherever you go ',
        text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },
    {
        id: uuidv4(),
        className: 'last-image',
        image:confetti,
        reference: "By Claire Robinson",
        header: 'Our invite-only Beta accounts are now live!',
        text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... "
    }
]

const articleReducer = (state= INITIAL_ARTICLE_STATE) => {
    return state;
}

export default articleReducer