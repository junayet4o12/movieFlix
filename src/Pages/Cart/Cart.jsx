import { useEffect, useState } from "react";
import { removeMoviesIdFromLocalStorage, storedMovies } from "../../localStorage/localStorage";
import SingleMovieDetailsCart from "../MovieDetails/SingleMovieDetailsCart";
import Title from "../../Shared/Title/Title";
import NoMoviesAvailable from "../../Shared/NoMoviesAvailable/NoMoviesAvailable";
import Loading from "../../Shared/Loading/Loading";

const Cart = () => {
    const [moviesInCart, setMoviesInCart] = useState([])
    const [loading, setLoading] = useState(false)
    const moviesIdInCart = storedMovies();
    useEffect(() => {
        setLoading(true)
        fetch('movies.json')
            .then(res => res.json())
            .then(data => {
                const cartMovies = data?.filter(datum => moviesIdInCart?.find(id => id === datum?.imdbmovieid))
                setMoviesInCart(cartMovies)
                setLoading(false)
            })
    }, [])

    const removeFromCart = (id) => {
        removeMoviesIdFromLocalStorage(id)
        const newMoviesInCart = moviesInCart.filter(movie => movie?.imdbmovieid !== id);
        setMoviesInCart(newMoviesInCart)
    }
    return (
        <div className="pt-24 min-h-screen bg-primary  pb-24 px-5 space-y-5">
            {
                loading ? <Loading /> : <>
                    <Title title1={'Your'} title2={'Saved Movies'} />
                    <div className="grid grid-cols-1 md:grid-cols-2  flex-col gap-10">
                        {
                            moviesInCart?.map((data, idx) => <SingleMovieDetailsCart key={idx} movie={data} cartMovies={true} removeFromCart={removeFromCart} />)
                        }
                    </div>
                    <div className="">
                        {
                            moviesInCart?.length < 1 && <NoMoviesAvailable />
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default Cart;