import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";

const Popular = () => {
    document.title = "MoviesNSeries | Popular";

    const navigate = useNavigate();
    const [category, setCategory] = useState("movie"); // Keep track of the selected category
    const [popular, setPopular] = useState([]); // Store the data for the selected category
    const [page, setPage] = useState(1); // Track the current page number
    const [hasMore, setHasMore] = useState(true); // Flag to determine if there are more items to load

    // Function to fetch popular data based on the selected category
    const getPopular = async () => {
        try {
            const { data } = await axios.get(
                `${category}/popular?page=${page}` // Fetch data based on category
            );
            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]); // Append new data to existing data
                setPage(page + 1); // Increment page number
            } else {
                setHasMore(false); // No more data to load
            }
        } catch (error) {
            console.log("Error: ", error); // Handle API errors
        }
    };

    // Refresh data whenever category changes
    const refreshHandler = () => {
        if (popular.length === 0) {
            getPopular(); // Fetch data if no data is available
        } else {
            setPage(1); // Reset page to 1 for new category
            setPopular([]); // Clear the current data
            getPopular(); // Fetch data for new category
        }
    };

    // Call refreshHandler whenever the category changes
    useEffect(() => {
        refreshHandler();
    }, [category]); // Dependencies array ensures this runs whenever category changes

    return popular.length > 0 ? (
        <div className="w-screen h-screen">
            <div className="px-[5%] w-full flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#7e31c2] ri-arrow-left-line"
                    ></i>{" "}
                    Popular
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                    {/* Dropdown to select category, passing category as the selected value */}
                    <Dropdown
                        title="Category"
                        options={["tv", "movie"]}
                        func={(e) => setCategory(e.target.value)} // Update category when selected
                        selected={category} // Display currently selected category in the dropdown
                    />
                    <div className="w-[2%]"></div>
                </div>
            </div>

            {/* Infinite Scroll Component */}
            <InfiniteScroll
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                {/* Cards Component that renders the fetched data */}
                <Cards data={popular} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Popular;
