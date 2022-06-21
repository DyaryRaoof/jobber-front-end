const GET_CATEGORIES = 'jobber/categories/GET_CATEGORIES';

const initialState = { categories: [] };

export const getCategories = (payload) => ({
  type: GET_CATEGORIES,
  payload,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
