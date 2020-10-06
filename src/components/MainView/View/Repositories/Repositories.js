import React, { useState } from "react";
//Redux ------------------------------------------------------------------------------------------------
import { getGitRepoAndContributor } from "../../../../actions/gitUsers";
import { connect } from "react-redux";
//Material-UI ------------------------------------------------------------------------------------------------
import Pagination from "@material-ui/lab/Pagination";
import { Typography } from "@material-ui/core";
//CSS ------------------------------------------------------------------------------------------------
import "./Repositories.css";

//Components ------------------------------------------------------------------------------------------------
const Repositories = ({
  repos,
  getGitRepoAndContributor,
  showFavourite,
  favourites,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page) => {
    if ((page - 1) * 5 < repos.length) setCurrentPage((page - 1) * 5);
  };

  return (
    <div className="repo__container">
      {repos
        ? repos.slice(currentPage, currentPage + 5).map((repo) => {
            return (
              <div
                className="repo"
                key={repo.id}
                onClick={() =>
                  getGitRepoAndContributor(repo, repo.contributors_url)
                }
              >
                <div>
                  <div className="repo__header">
                    <Typography variant="h5">{repo.name}</Typography>
                  </div>
                  <div className="repo__content">
                    <div style={{ width: "80%" }}>
                      <p>{repo.description}</p>
                    </div>
                    <div className="repo__stats">
                      <p>Watchers: {repo.watchers}</p>
                      <p>Forks: {repo.forks}</p>
                      <p>Language: {repo.language}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      <div>
        <Pagination
          onChange={(e, page) => handlePageChange(page)}
          count={repos ? repos.length / 5 - 1 : 0}
          color="primary"
        />
      </div>
    </div>
  );
};

//Redux Mapping ------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
  return {
    repos: state.gitUsers.userRepos,
    showFavourite: state.gitUsers.showFavourite,
    selectedRepoContributors: state.gitUsers.selectedRepoContributors,
    favourites: state.gitUsers.favourites,
  };
};

export default connect(mapStateToProps, { getGitRepoAndContributor })(
  Repositories
);
