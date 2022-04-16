const CHANGE_CATEGORY = 'scandiweb-challenge/ui/CHANGE_CATEGORY';
const CHANGE_CURRENCY = 'scandiweb-challenge/ui/CHANGE_CURRENCY';

const initialState = { categoryName: 'all', currency: '$' };

export const changeCategory = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
});


export const changeCurrency = (payload) => ({
    type: CHANGE_CURRENCY,
    payload,
});

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                categoryName: action.payload,
            };
        case CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.payload,
            };
        default:
            return state;
    }
}

export default uiReducer;