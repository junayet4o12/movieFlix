import { useEffect, useState } from "react";
import { storedMovies } from "../../localStorage/localStorage";
import SingleMovieDetailsCart from "../MovieDetails/SingleMovieDetailsCart";
import Title from "../../Shared/Title/Title";

const Cart = () => {
    const [moviesInCart, setMoviesInCart] = useState([])
    const moviesIdInCart = storedMovies();
    useEffect(() => {
        fetch('movies.json')
            .then(res => res.json())
            .then(data => {
                const cartMovies = data?.filter(datum => moviesIdInCart?.find(id => id === datum?.imdbmovieid))
                setMoviesInCart(cartMovies)
            })
    }, [])
    return (
        <div className="pt-24 min-h-screen bg-primary  pb-24 px-5 space-y-5">
            <Title title1={'Your'} title2={'Saved Movies'}/>
            <div className="grid grid-cols-1 md:grid-cols-2  flex-col gap-10">
                {
                    moviesInCart?.map((data, idx) => <SingleMovieDetailsCart key={idx} movie={data} cartMovies={true} />)
                }
            </div>
        </div>
    );
};

export default Cart;