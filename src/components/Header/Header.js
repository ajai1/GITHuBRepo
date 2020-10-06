import React from "react";
//Material-UI ---------------------------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//Redux ---------------------------------------------------------------------------------------
import { connect } from "react-redux";
import { getFavouriteRepos } from "../../actions/gitUsers";

//Material-UI stlyes---------------------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

//Component ---------------------------------------------------------------------------------
const Header = ({ getFavouriteRepos }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            GITHuB Repo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default connect(null, { getFavouriteRepos })(Header);
