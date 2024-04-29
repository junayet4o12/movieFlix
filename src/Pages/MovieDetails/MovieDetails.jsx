import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMovieDetailsCart from "./SingleMovieDetailsCart";
import Loading from "../../Shared/Loading/Loading";

const MovieDetails = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch('/movies.json')
            .then(res => res.json())
            .then(data => {
                const foundMovie = data?.find(datum => datum?.imdbmovieid === id)
                setMovie([foundMovie])
                setLoading(false)
            })
    }, [id])
    return (
        <div className="min-h-screen bg-primary py-24 flex justify-center items-center px-5 ">
            {
                loading ? <Loading /> : movie?.map((data, idx) => <SingleMovieDetailsCart key={idx} movie={data} />)

            }
        </div>
    );
};

export default MovieDetails;