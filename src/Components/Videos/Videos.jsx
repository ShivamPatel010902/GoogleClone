import React, { useEffect } from "react";
import { fetchVideos1 } from "../../Redux";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import Loading from "../Loading";
import "./video.css";
function Videos() {
  const videosof = useSelector((state) => state.video.videos);
  console.log(videosof);
  const loadingof = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const searchText = "iphone reviews";
  useEffect(() => {
    dispatch(fetchVideos1(searchText));
  }, [dispatch]);
  return loadingof.loading ? (
    <Loading />
  ) : loadingof.error ? (
    <p>{loadingof.error}</p>
  ) : (
    <>
      <div className="div-1-invideo">
        <div className="div-2-invideo">
          {videosof?.map(({ additional_links, title, link }, index) => (
            <div key={index}>
              <div className="div-3-invideo">
                <ReactPlayer
                  url={additional_links?.[0].href}
                  controls
                  width="100%"
                  height="200px"
                  onReady={() => {
                    console.log("ready");
                  }}
                  onError={() => {
                    console.log("not vailed url");
                  }}
                />
                <p className="p-1-invideo" >{title?.length > 30 ? title.substring(0, 30) : title}</p>
                <a href={link}>
                  {link?.length > 50 ? link.substring(0, 50) : link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Videos;
