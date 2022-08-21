import React, { useEffect } from "react";
import { fetchNews1 } from "../../Redux";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading";
import "./News.css";
function News() {
  const newsof = useSelector((state) => state.news.news);
 console.log(newsof)
  const loadingof = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const searchText = "India";
  useEffect(() => {
    dispatch(fetchNews1(searchText));
  }, [dispatch]);
  return loadingof.loading ? (
    <Loading />
  ) : loadingof.error ? (
    <p>{loadingof.error}</p>
  ) : (
    <>
       <div className="div-1-innews">
        <div className="div-2-innews">
        {newsof?.map(({ source , published , title }, index) => {
            return (
              <div className="div-3-innews"  key={index}>
                <h3 className="h3-1-innews" >{source?.title}</h3>
                <a className='a-1-innews' target="_blank" href={source?.href}>{title}</a>
                <p className="p-1-innews">{published}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
