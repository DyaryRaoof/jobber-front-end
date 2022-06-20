const SET_USER = 'jobber/users/SET_USER';

const initialState = { user: null };

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
