import * as FavoriteActions from "redux/actions/favorite";

const initialState = {
  errorFavorite: null,
  favorites: [],
  loadingFavorite: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FavoriteActions.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case FavoriteActions.DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite._id !== action.payload._id
        ),
      };
    case FavoriteActions.GET_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case FavoriteActions.FETCH_FAVORITE_ERROR:
      return {
        ...state,
        errorFavorite: action.payload,
      };
    case FavoriteActions.CLEAN_FAVORITE_STATE:
      return {
        ...state,
        favorites: [],
      };
    case FavoriteActions.LOADING_FAVORITE:
      return {
        ...state,
        loadingFavorite: true,
      };
    case FavoriteActions.LOADING_FAVORITE_END:
      return {
        ...state,
        loadingFavorite: false,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
