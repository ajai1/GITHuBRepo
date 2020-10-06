import React, { useEffect } from "react";
//Component Imports ---------------------------------------------------------
import Detail from "./Detail/Detail";
import View from "./View/View";
import Favourites from "./Detail/Favourites/Favourites";
//Redux / Constants ---------------------------------------------------------
import { connect } from "react-redux";
import "../../Constants/types";
import { getGitUsers } from "../../actions/gitUsers";
//Material-UI ----------------------------------------------------------------
import { Grid } from "@material-ui/core";
//CSS ------------------------------------------------------------------------
import "./MainView.css";

//Component ------------------------------------------------------------------------
const MainView = ({ getGitUsers, users }) => {
  useEffect(() => {
    getGitUsers();
  }, [getGitUsers]);

  return (
    <div>
      <Grid className="main__View__container" container spacing={1}>
        <Grid item xs={12} md={4}>
          <div>
            <div className="containers">
              <Detail gitUsers={users}></Detail>
            </div>
            <div className="containers">
              <Favourites />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="containers">
            <View></View>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

//Redux Mappings ------------------------------------------------------------------------
const mapStateToProps = (state) => {
  return {
    users: state.gitUsers.users,
  };
};

export default connect(mapStateToProps, { getGitUsers })(MainView);
