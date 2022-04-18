const CHANGE_CATEGORY = 'scandiweb-challenge/ui/CHANGE_CATEGORY';
const CHANGE_CURRENCY = 'scandiweb-challenge/ui/CHANGE_CURRENCY';
const SHOW_OVERLAY = 'scandiweb-challenge/ui/SHOW_OVERLAY';

const initialState = { categoryName: 'all', currency: '$', showOverlay: false };

export const changeCategory = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
});


export const changeCurrency = (payload) => ({
    type: CHANGE_CURRENCY,
    payload,
});

export const showOverlay = (payload) => ({
    type: SHOW_OVERLAY,
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
        case SHOW_OVERLAY:
            return {
                ...state,
                showOverlay: action.payload,
            };
        default:
            return state;
    }
}

export default uiReducer;