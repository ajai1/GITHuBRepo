import React, { useState } from "react";
import { connect } from "react-redux";
import "./Detail.css";

import {
  getOwner,
  getUserRepo,
  getGitRepoAndContributor,
} from "../../../actions/gitUsers";

import Pagination from "@material-ui/lab/Pagination";
import { Avatar, Typography } from "@material-ui/core";

const Detail = ({
  gitUsers,
  getUserRepo,
  getOwner,
  getGitRepoAndContributor,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page) => {
    if ((page - 1) * 6 < gitUsers.length) setCurrentPage((page - 1) * 6);
  };

  const selectUser = (user) => {
    getOwner(user.login);
    getUserRepo(user.repos_url);
    getGitRepoAndContributor(null, null);
  };

  return (
    <>
      <Typography variant="h4">All Users</Typography>
      {gitUsers
        ? gitUsers.slice(currentPage, currentPage + 6).map((user) => {
            return (
              <div
                className="detailContainer"
                key={user.id}
                onClick={() => selectUser(user)}
              >
                <Typography variant="body2">
                  {user.login.toUpperCase()}
                </Typography>
                <Avatar alt={user.name} src={user.avatar_url} />
              </div>
            );
          })
        : null}
      <Pagination
        onChange={(e, page) => handlePageChange(page)}
        count={gitUsers ? gitUsers.length / 5 - 1 : 0}
        color="primary"
      />
    </>
  );
};

export default connect(null, {
  getUserRepo,
  getOwner,
  getGitRepoAndContributor,
})(Detail);
