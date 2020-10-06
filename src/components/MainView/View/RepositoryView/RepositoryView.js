import React from "react";
//Redux ------------------------------------------------------------------------------------------------
import { connect } from "react-redux";
import {
  getGitRepoAndContributor,
  getUserRepo,
  getOwner,
  setFavouriteRepos,
} from "../../../../actions/gitUsers";
//Material-UI ------------------------------------------------------------------------------------------------
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
//CSS ------------------------------------------------------------------------------------------------
import "./RepositoryView.css";

//Component ------------------------------------------------------------------------------------------------
const RepositoryView = ({
  getGitRepoAndContributor,
  contributers,
  repo,
  getUserRepo,
  getOwner,
  setFavouriteRepos,
  favourites,
}) => {
  const selectContributer = (contributer) => {
    getOwner(contributer.login);
    getUserRepo(contributer.repos_url);
    getGitRepoAndContributor(null, null);
  };

  const addToFavourite = (repo) => {
    if (favourites.find((fav) => fav.id === repo.id)) {
      alert("Already your favourite !!!");
    } else {
      setFavouriteRepos(repo);
    }
  };

  return (
    <div className="repository__container">
      <div className="repository__Header">
        <Typography variant="h4">Repository Info</Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ArrowBackIcon></ArrowBackIcon>}
          onClick={() => getGitRepoAndContributor(null, null)}
        >
          BACK
        </Button>
      </div>
      <div className="repository__Header">
        <Typography variant="h5">{repo.name.toUpperCase()}</Typography>
        <div className="repository__HeaderName">
          <IconButton
            onClick={() => {
              addToFavourite({ ...repo });
            }}
          >
            <FavoriteIcon fontSize="large" color="primary" />
          </IconButton>
          <Typography variant="caption"> add to favourites</Typography>
        </div>
      </div>
      <div>
        {contributers ? (
          contributers.map((contributer) => {
            return (
              <div
                className="contributers__container"
                key={contributer.node_id}
              >
                <div className="contributers__info">
                  <Avatar src={contributer.avatar_url} />
                  <Typography variant="h6"> {contributer.login}</Typography>
                </div>
                <div
                  className="contributers__info"
                  style={{ alignItems: "flex-end" }}
                >
                  <Typography variant="h6">
                    Number of Contribution: {contributer.contributions}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ArrowBackIcon></ArrowBackIcon>}
                    onClick={() => selectContributer(contributer)}
                  >
                    Show User
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <Typography variant="h6">No Contributers Yet</Typography>
        )}
      </div>
    </div>
  );
};

//Redux Mappings-------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
  return {
    contributers: state.gitUsers.selectedRepoContributors.contributors,
    repo: state.gitUsers.selectedRepoContributors.repo,
    favourites: state.gitUsers.favourites,
  };
};

export default connect(mapStateToProps, {
  getGitRepoAndContributor,
  getUserRepo,
  getOwner,
  setFavouriteRepos,
})(RepositoryView);
