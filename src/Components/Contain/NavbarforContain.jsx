import React from "react";
import "../navbar.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { fetchContains1 } from "../../Redux";
import { useDispatch } from "react-redux";
import Contains from "./Contains";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    hovercolor: theme.palette.action.hover,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function NavbarforContain() {
  const classes = useStyles();
  const [searchparam, setSearchparam] = useState("");
  const dispatch = useDispatch();
  const handelonSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchContains1(searchparam));
  };

  return (
    <>
      <div className="firstcontainer">
        <div className="subcentercontainer">
          <form onSubmit={handelonSubmit} className="inputbtn">
            <input
              type="text"
              className="inputbox"
              value={searchparam}
              onChange={(e) => setSearchparam(e.target.value)}
              placeholder="Search..."
            />
            <button type="submit" className="buttonforsearch">
              <IconButton aria-label="delete" className={classes.margin}>
                <SearchIcon />
              </IconButton>
            </button>
          </form>
        </div>
      </div>
      <div className="secondcontainer">
        <p className="searchsection" > This Section for Explore Websites </p>
      </div>
      <Contains searchparam = {searchparam} />
    </>
  );
}

export default NavbarforContain;
