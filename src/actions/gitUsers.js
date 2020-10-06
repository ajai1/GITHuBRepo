import axios from "axios";
import {
  GET_GIT_USERS,
  GET_USER_REPO,
  GET_OWNER,
  GET_REPO_CONTRIBUTORS,
  SET_FAV_REPO,
  GET_FAV_REPO,
  REMOVE_FAV_REPO,
} from "../Constants/types";

export const getGitUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.github.com/users", {
      auth: {
        username: "ajai1",
        password: "b69891479fae5e706953785b7149455917095db3",
      },
    });
    dispatch({
      type: GET_GIT_USERS,
      payload: res.data,
    });
  } catch (error) {
    console.log("error");
  }
};

export const getUserRepo = (url) => async (dispatch) => {
  try {
    const res = await axios.get(url, {
      auth: {
        username: "ajai1",
        password: "b69891479fae5e706953785b7149455917095db3",
      },
    });
    dispatch({
      type: GET_USER_REPO,
      payload: res.data,
    });
  } catch (error) {
    console.log("error");
  }
};

export const getOwner = (owner) => async (dispatch) => {
  const res = await axios.get(`https://api.github.com/users/${owner}`, {
    auth: {
      username: "ajai1",
      password: "b69891479fae5e706953785b7149455917095db3",
    },
  });
  dispatch({
    type: GET_OWNER,
    payload: res.data,
  });
};

export const setFavouriteRepos = (selectedRepo) => async (dispatch) => {
  dispatch({
    type: SET_FAV_REPO,
    payload: selectedRepo,
  });
};

export const removeFavouriteRepos = (selectedRepo) => async (dispatch) => {
  dispatch({
    type: REMOVE_FAV_REPO,
    payload: selectedRepo,
  });
};

export const getFavouriteRepos = () => async (dispatch) => {
  console.log("favourite");
  dispatch({
    type: GET_FAV_REPO,
    payload: undefined,
  });
};

export const getGitRepoAndContributor = (repo, url) => async (dispatch) => {
  if (url) {
    try {
      const res = await axios.get(url, {
        auth: {
          username: "ajai1",
          password: "b69891479fae5e706953785b7149455917095db3",
        },
      });
      dispatch({
        type: GET_REPO_CONTRIBUTORS,
        payload: { repo: repo, contributors: res.data },
      });
    } catch (error) {
      console.log("error");
    }
  } else {
    dispatch({
      type: GET_REPO_CONTRIBUTORS,
      payload: null,
    });
  }
};
