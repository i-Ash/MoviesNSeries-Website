import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";

const Movie = () => {
    document.title = "MoviesNSeries | Movies";

    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");  // Category to filter movies
    const [movie, setmovie] = useState([]);                   // Movie data
    const [page, setpage] = useState(1);                      // Current page
    const [hasMore, sethasMore] = useState(true);             // Flag to check if there are more results

    // Function to fetch movies based on the selected category
    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if (data.results.length > 0) {
                setmovie((prevState) => [...prevState, ...data.results]);
                setpage(page + 1); // Increase page number for next load
            } else {
                sethasMore(false);  // No more data to fetch
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    // Refresh the data when category changes
    const refershHandler = () => {
        if (movie.length === 0) {
            GetMovie();
        } else {
            setpage(1); // Reset page to 1 when category changes
            setmovie([]); // Clear the current movie data
            GetMovie(); // Fetch new data based on the new category
        }
    };

    useEffect(() => {
        refershHandler();  // Fetch the movie data based on the selected category
    }, [category]);  // Re-run when the category changes

    return movie.length > 0 ? (
        <div className="w-screen h-screen">
            <div className="px-[5%] w-full flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#7e31c2] ri-arrow-left-line"
                    ></i>{" "}
                    Movie
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                    <div className="w-[2%]"></div>
                    {/* The Dropdown */}
                    <Dropdown
                        title="Category"
                        options={["popular", "top_rated", "upcoming", "now_playing"]}
                        // Update the category when an option is selected
                        func={(e) => setcategory(e.target.value)}
                        // Make sure the dropdown shows the selected option
                        selected={category}
                    />
                </div>
            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={GetMovie}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Movie;
