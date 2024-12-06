import React from "react";
import { useNavigate } from "react-router-dom";
import favicon from "../../public/favicon.png";
const About = () => {
  document.title = "MoviesNSeries | About";
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen ">
      <div className=" px-[5%] w-full h-[5rem] flex items-center">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#7e31c2] ri-arrow-left-line"
          ></i>{" "}
          About
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-5xl text-zinc-200 flex items-center space-x-4">
          <span>About</span>
          <img src={favicon} alt="MoviesNSeries Logo" className="w-12 h-12" />
          <span>MoviesNSeries</span>
        </h1>
        <div className="mx-[10%] w-full md:w-4/5 lg:w-3/5 xl:w-2/5 h-auto mt-6">
          <h3 className="text-2xl text-zinc-300">Description</h3>
          <p className="text-lg text-zinc-400 mt-2">
            MoviesNSeries is your go-to platform for all things movies and TV
            series. We bring you the latest updates, and recommendations from
            the entertainment world.With our powerful search feature, you can
            look up any celebrity and discover their complete filmography.
            Whether you're a fan of legendary actors or rising stars, we've got
            the details you need at your fingertips. Whether you're a fan of
            action, drama, comedy, or sci-fi, we have something for everyone.
            Explore the magic of storytelling and celebrate the art of cinema
            and television.
          </p>
        </div>
        <p className="text-lg text-zinc-400 mt-[15%]">
          Ready to dive into the world of movies and series? Let's get started!
        </p>
      </div>
    </div>
  );
};

export default About;
