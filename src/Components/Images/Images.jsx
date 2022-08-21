import React, { useEffect } from "react";
import { fetchImages1 } from "../../Redux";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";
import "./Images.css";
function Images() {
  const imagesof = useSelector((state) => state.image.images);
  console.log(imagesof);
  const loadingof = useSelector((state) => state.image);
  const dispatch = useDispatch();
  const searchText = "India";
  useEffect(() => {
    dispatch(fetchImages1(searchText));
  }, [dispatch]);
  return loadingof.loading ? (
    <Loading />
  ) : loadingof.error ? (
    <p>{loadingof.error}</p>
  ) : (
    <>
      <div className="div-1-inimage">
        <div className="div-2-inimage">
          {imagesof?.map(({ image , link }, index) => {
            return (
              <div className="div-3-inimage"  key={index}>
                <img src={image?.src} alt="No image here" style = {{width : '100%'}} />
                <a  className="a-1-inimage"  target="_blank" href={link?.href}>{link?.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Images;
