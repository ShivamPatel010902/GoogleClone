import React from "react";
import "../navbar.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { fetchImages1 } from "../../Redux";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Images from "./Images";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function NavbarforImage() {
  const [searchparam, setSearchparam] = useState("");
  const dispatch = useDispatch();
  const handelonSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchImages1(searchparam));
  };
  const classes = useStyles();
  return (
    <>
      <div className="firstcontainer">
        <div className="centercontainer">
          <div className="subcentercontainer">
            <form onSubmit={handelonSubmit} className="inputbtn">
              <input
                type="text"
                className="inputbox"
                value={searchparam}
                placeholder="search..."
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
        <p className="searchsection" > This Section for Explore Images </p>
      </div>
      <Images/>
    </>
  );
}

export default NavbarforImage;
