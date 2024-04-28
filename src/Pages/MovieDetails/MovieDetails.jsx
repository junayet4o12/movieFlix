import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCart from "../Movies/MovieCart";
import SingleMovieDetailsCart from "./SingleMovieDetailsCart";

const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    useEffect(() => {
        fetch('/movies.json')
            .then(res => res.json())
            .then(data => {
                const foundMovie = data?.find(datum => datum?.imdbmovieid === id)
                setMovie([foundMovie])
            })
    }, [id])
    console.log();
    return (
        <div className="min-h-screen bg-primary py-24 flex justify-center items-center px-5 ">
            {
                movie?.map((data, idx) => <SingleMovieDetailsCart key={idx} movie={data} />)
            }
        </div>
    );
};

export default MovieDetails;