import React from "react";
import "../navbar.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { fetchVideos1 } from "../../Redux";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Videos from "./Videos";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function NavbarforVideos() {
  const classes = useStyles();
  const [searchparam, setSearchparam] = useState("");
  const dispatch = useDispatch();
  const handelonSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchVideos1(searchparam));
  };

  return (
    <>
      <div className="firstcontainer">
        <div className="centercontainer">
          <div className="subcentercontainer">
            <form onSubmit={handelonSubmit} className="inputbtn">
              <input
                type="text"
                className="inputbox"
                placeholder="search..."
                value={searchparam}
                onChange={(e) => setSearchparam(e.target.value)}
              />
              <button type="submit" className="buttonforsearch">
                <IconButton aria-label="delete" className={classes.margin}>
                  <SearchIcon />
                </IconButton>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="secondcontainer">
        <p className="searchsection" > This Section for Explore Videos </p>
      </div>
      <Videos/>
    </>
  );
}

export default NavbarforVideos;
