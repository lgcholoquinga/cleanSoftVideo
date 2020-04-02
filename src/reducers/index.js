import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      if (state.mylist.filter((ele) => ele.id === action.payload.id).length !== 0) {
        return state;
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case actions.deleteFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
