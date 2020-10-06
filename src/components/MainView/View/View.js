import React from "react";
//Component Imports ----------------------------------------------------------------------------------
import Repositories from "./Repositories/Repositories";
import RepositoryView from "./RepositoryView/RepositoryView";
//Material-UI --------------------------------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Link, Typography } from "@material-ui/core";
//CSS ------------------------------------------------------------------------------------------------
import "./View.css";
//Redux ------------------------------------------------------------------------------------------------
import { connect } from "react-redux";

//Material-Styles -----------------------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "200px",
    height: "200px",
  },
}));

//Component ------------------------------------------------------------------------------------------------
const View = ({ repos, owner, selectedRepoContributors, showFavourite }) => {
  const classes = useStyles();

  return (
    <div style={{ width: "100%", overflowY: "scroll", height: "90vh" }}>
      {owner ? (
        <div className="viewContainer">
          <Avatar className={classes.avatar} src={owner.avatar_url} />
          <h1 className="name">{owner.name}</h1>
          <Typography variant="h5">
            <Link href={owner.html_url} target="_blank" color="secondary">
              @{owner.login}
            </Link>
          </Typography>
          <div className="user__details__container">
            {(owner.company || owner.location) && (
              <div className="user__details">
                <p>{owner.company}</p>
                <p>{owner.location}</p>
              </div>
            )}
            {(owner.email || owner.blog) && (
              <div className="user__details">
                <p>{owner.email}</p>
                <p>{owner.blog}</p>
              </div>
            )}
            {(owner.followers || owner.following) && (
              <div className="user__details">
                <p>
                  <strong>Followers: </strong>
                  {owner.followers}
                </p>
                <p>
                  <strong>Following: </strong>
                  {owner.following}
                </p>
              </div>
            )}
          </div>
          <div style={{ width: "80%" }}>
            {selectedRepoContributors ? <RepositoryView /> : <Repositories />}
          </div>
        </div>
      ) : (
        <div className="viewContainer">
          <Typography variant="h5">Please select an user</Typography>
        </div>
      )}
    </div>
  );
};

//Redux Mappings -----------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
  return {
    owner: state.gitUsers.owner,
    repos: state.gitUsers.userRepos,
    selectedRepoContributors: state.gitUsers.selectedRepoContributors,
  };
};

export default connect(mapStateToProps)(View);
