import React, { useEffect } from "react";
import { fetchContains1 } from "../../Redux";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";
import "./Contains.css";
const searchtext = "India";
function Contains() {
  const containsof = useSelector((state) => state.contain.contains);
  const loadingof = useSelector((state) => state.contain);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContains1(searchtext));
  }, [dispatch]);
  return loadingof.loading ? (
    <Loading />
  ) : loadingof.error ? (
    <p>{loadingof.error}</p>
  ) : (
    <>
      <div className="div-1-incontain">
        <div className="div-2-incontain">
          {containsof?.map(({ title, link, description }, index) => (
            <div key={index} className="div-3-incontain">
              <a href={link} target="_blank" className="a-1-incontain">
                <p className="p-1-incontain">
                  {link?.length > 30 ? link.substring(0, 30) : link}
                </p>
                <h3 className="h3-1-incontain">{title}</h3>
              </a>
              <p className="p-2-incontain">
                {description?.length > 160
                  ? description.substring(0, 160)
                  : description}
                ...
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contains;
