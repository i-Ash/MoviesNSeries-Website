import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);
    ytvideo && ytvideo.name && (document.title = "MoviesNSeries | " + ytvideo.name);
    return (
        <div className="bg-[rgba(0,0,0,.9)] absolute z-[100] top-1 left-1 w-[99vw] h-[90vh] ">
            <Link
                onClick={() => navigate(-1)}
                className="absolute hover:text-[#7e31c2] ri-close-fill text-3xl text-white right-[3%] top-[2%]"
            ></Link>
            {ytvideo ? (
                <ReactPlayer
                    controls
                    height={650}
                    width={1400}
                    url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
                />
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Trailer;
