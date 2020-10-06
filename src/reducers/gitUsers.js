import {
  GET_GIT_USERS,
  GET_USER_REPO,
  GET_OWNER,
  GET_REPO_CONTRIBUTORS,
  SET_FAV_REPO,
  GET_FAV_REPO,
  REMOVE_FAV_REPO,
} from "../Constants/types";
const initialState = {
  selectedRepoContributors: null,
  favourites: [],
  showFavourite: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_GIT_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_USER_REPO:
      return {
        ...state,
        userRepos: payload,
      };
    case GET_OWNER:
      return {
        ...state,
        owner: payload,
      };
    case GET_REPO_CONTRIBUTORS:
      return {
        ...state,
        selectedRepoContributors: payload,
      };
    case SET_FAV_REPO:
      return {
        ...state,
        favourites: [...state.favourites, { ...payload }],
      };
    case GET_FAV_REPO:
      return {
        ...state,
        showFavourite: !state.showFavourite,
      };
    case REMOVE_FAV_REPO:
      return {
        ...state,
        favourites: [
          ...state.favourites.filter((fav) => fav.id !== payload.id),
        ],
      };
    default:
      return state;
  }
}
