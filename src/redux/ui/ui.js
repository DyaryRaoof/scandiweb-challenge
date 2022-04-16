const CHANGE_CATEGORY = 'scandiweb-challenge/ui/CHANGE_CATEGORY';

const initialState = { categoryName: 'all' };

export const changeCategory = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
});

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                categoryName: action.payload,
            };
        default:
            return state;
    }
}

export default uiReducer;