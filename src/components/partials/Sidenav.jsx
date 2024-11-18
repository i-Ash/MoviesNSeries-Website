import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import favicon from "../../../public/favicon.png";
// #7e31c2
const Sidenav = () => {
    return (
        <div className="w-[20%] h-full  border-r-2 border-zinc-400 p-5">
            <h1 className="text-xl text-white font-bold flex gap-2">
                <img src={favicon} alt=""/>
                <span className="text-3xl">MoviesNSeries</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl">
                <h1 className="text-white font-semibold text-xl mt-8 mb-3">
                    New Feeds
                </h1>
                <Link
                    to="/trending"
                    className="hover:bg-[#7e31c2] hover:text-white duration-300 rounded-lg p-5 text-lg"
                >
                    <i className="ri-fire-fill"></i> Trending
                </Link>
                <Link
                    to="/popular"
                    className="hover:bg-[#7e31c2] hover:text-white duration-300 rounded-lg p-5 text-lg"
                >
                    <i className="mr-2 ri-bard-fill"></i>
                    Popular
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-[#7e31c2] hover:text-white duration-300 rounded-lg p-5 text-lg"
                >
                    <i className="mr-2 ri-movie-2-fill"></i>
                    Movies
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-[#7e31c2] hover:text-white duration-300 rounded-lg p-5 text-lg"
                >
                    <i className="mr-2 ri-tv-2-fill"></i>
                    Tv Shows
                </Link>
                <Link
                    to="/person"
                    className="hover:bg-[#7e31c2] hover:text-white duration-300 rounded-lg p-5 text-lg"
                >
                    <i className="mr-2 ri-team-fill"></i>
                    People
                </Link>
            </nav>
            <hr className="mt-5 mb-5"/>
            <nav className="flex flex-col text-zinc-400 text-lg">
                <h1 className="text-white font-semibold text-xl mb-3">
                    Website Information
                </h1>
                <Link className="hover:bg-[#7e31c2] hover:text-white duration-300 rounded-lg p-5">
                    <i className="mr-2 ri-information-fill"></i> About
                </Link>
                {/* <Link className="hover:bg-[#7e31c2] hover:text-white duration-300 rounded-lg p-5">
                    <i className="mr-2 ri-phone-fill"></i>
                    Contact Us
                </Link> */}
            </nav>
        </div>
    );
};

export default Sidenav;
