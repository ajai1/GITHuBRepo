import React from "react";
import { Link, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { removeFavouriteRepos } from "../../../../actions/gitUsers";

import { connect } from "react-redux";
import "./Favourites.css";

const Favourites = ({ no_of_fav, favourites, removeFavouriteRepos }) => {
  const removeFavourite = (favourite) => {
    removeFavouriteRepos(favourite);
  };

  const no_Favourites =
    no_of_fav === 0 ? (
      <Typography variant="body1">None Available</Typography>
    ) : (
      <Typography variant="body1">{no_of_fav}</Typography>
    );
  return (
    <div className="favouritesContainer">
      <div className="favouritesContainer_header">
        <Typography variant="h5">Favourites</Typography>
        <span
          style={{ marginLeft: "10px", textAlign: "center", padding: "10px" }}
        >
          {no_Favourites}
        </span>
      </div>
      <div className="favouritesContainer_content">
        {favourites
          ? favourites.map((fav) => {
              if (fav) {
                return (
                  <div key={fav.id} className="fav_container">
                    <Typography style={{ marginLeft: "10px" }} variant="body2">
                      <Link href={fav.html_url} target="_blank" color="inherit">
                        {fav.full_name}
                      </Link>
                    </Typography>
                    {fav && (
                      <IconButton onClick={() => removeFavourite(fav)}>
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    )}
                  </div>
                );
              }
              return null;
            })
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    no_of_fav: state.gitUsers.favourites.length,
    favourites: state.gitUsers.favourites,
  };
};

export default connect(mapStateToProps, { removeFavouriteRepos })(Favourites);
