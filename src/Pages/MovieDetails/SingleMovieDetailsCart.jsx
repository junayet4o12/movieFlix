/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import notFoundImg from '../../assets/notFoundImg.jpg'
import { moviesCollectionForStoring } from "../../localStorage/localStorage";
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
const SingleMovieDetailsCart = ({ movie, cartMovies, removeFromCart }) => {
    const { refetch, setRefetch } = useContext(AuthContext)
    const { movietitle, imdbmovieid, movielanguages, moviecountries, moviemainphotos, moviegenres } = movie;
    return (
        <Card className="w-full max-w-[600px] shadow-lg  bg-white/90 text-black border-2 mx-auto">
            <CardHeader floated={false} color="blue-gray" className="">
                <img className="object-cover mx-auto"
                    src={moviemainphotos[0] || notFoundImg}
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                {/* <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            </IconButton> */}
            </CardHeader>
            <CardBody>

                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="font-medium text-black">
                        {movietitle}
                    </Typography>


                </div>
                <div>
                    <p>genres: {moviegenres?.join(', ')}</p>
                </div>
                <hr className="border-black my-2 border-[1.3px] w-[70%]" />
                <div>
                    <p className="flex gap-2">Languages:  <span className="grid sm:grid-cols-2 gap-x-5 gap-y-3">{movielanguages?.map((lang, idx) => <span key={idx}><span></span>{idx + 1}- {lang}</span>)} </span></p>
                </div>
                <hr className="border-black my-2 border-[1.3px] w-[70%]" />
                <div>
                    <p className="flex gap-2">Countries:  <span className="grid sm:grid-cols-2 gap-x-5 gap-y-3">{moviecountries?.map((count, idx) => <span key={idx}><span></span>{idx + 1}- {count}</span>)} </span></p>
                </div>
                <hr className="border-black my-2 border-[1.3px] w-[70%]" />

            </CardBody>
            <CardFooter className="pt-3 mt-auto">
                {
                    cartMovies ? <Button onClick={() => {
                        removeFromCart(imdbmovieid)
                        setRefetch(refetch + 1)
                    }} size="lg" fullWidth={true} className="bg-secondary">
                        Remove from cart
                    </Button> : <Button onClick={() => {
                        moviesCollectionForStoring(imdbmovieid)
                        setRefetch(refetch + 1)
                    }} size="lg" fullWidth={true} className="bg-secondary">
                        Add To cart
                    </Button>
                }

            </CardFooter>
        </Card>
    );
};

export default SingleMovieDetailsCart;