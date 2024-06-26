import { useEffect, useState } from "react";
import Title from "../../Shared/Title/Title";
import MovieCart from "./MovieCart";
import { IoFilterOutline } from "react-icons/io5";
import NoMoviesAvailable from "../../Shared/NoMoviesAvailable/NoMoviesAvailable";
import Loading from "../../Shared/Loading/Loading";
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [Language, setLanguage] = useState('all');
    const [Country, setCountry] = useState('all');
    const [Genre, setGenre] = useState('all');
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('movies.json')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                setLoading(false)
            })
    }, [])
    function getUniqueArray(arrays) {
        // Flatten the array of arrays
        const flattenedArray = arrays.flat();

        // Remove duplicates using Set
        const uniqueLanguages = [...new Set(flattenedArray)];

        return uniqueLanguages;
    }
    const languagesArray = movies?.map(movie => movie?.movielanguages)
    const countryArray = movies?.map(movie => movie?.moviecountries)
    const genreArray = movies?.map(movie => movie?.moviegenres)
    // Flatten the array of arrays


    // Remove duplicates using Set
    const uniqueLanguages = getUniqueArray(languagesArray)
    const uniqueCountries = getUniqueArray(countryArray)
    const uniqueGenres = getUniqueArray(genreArray)

    const languages = [
        'All',
        ...uniqueLanguages
    ]
    const Countries = [
        'All',
        ...uniqueCountries
    ]
    const Genres = [
        'All',
        ...uniqueGenres
    ]
    const HandleLanguageFilter = (e) => {
        setLanguage(e?.target?.value)
    }
    const handleCountryFilter = (e) => {
        setCountry(e?.target?.value)
    }
    const handleGenreFilter = (e) => {
        setGenre(e?.target?.value)
    }

    const AllMovies = [...movies]
    const filterMoviesByLanguage = uniqueLanguages.includes(Language) ? AllMovies?.filter(movie => movie?.movielanguages.includes(Language)) : movies
    const filterMoviesByCountry = uniqueCountries.includes(Country) ? filterMoviesByLanguage?.filter(movie => movie?.moviecountries.includes(Country)) : filterMoviesByLanguage;
    const filterMoviesByGenre = uniqueGenres.includes(Genre) ? filterMoviesByCountry?.filter(movie => movie?.moviegenres.includes(Genre)) : filterMoviesByCountry;


    return (
        <div className="bg-primary min-h-[calc(100vh-0px)] px-5  sm:px-10 pt-24">

            {
                loading ? <Loading /> : <>
                    <Title title1={`All`} title2={'Movies'} />
                    <div className="flex gap-5  flex-wrap justify-around">
                        <div className="flex gap-3 items-center p-5">
                            <label className="text-sm font-bold flex justify-center items-center gap-2 text-white">Filter by Language <IoFilterOutline /></label>
                            <select placeholder="Priority" className="border-[2px] bg-black text-white border-white px-2 py-1.5 rounded-sm font-bold text-sm w-[140px]" value={Language} onChange={HandleLanguageFilter}>
                                <option value="all" disabled>Select </option>
                                {
                                    languages?.map((language) => <option key={language} value={language}> {language}</option>)
                                }
                            </select>
                        </div>
                        <div className="flex gap-3 items-center p-5">
                            <label className="text-sm font-bold flex justify-center items-center gap-2 text-white">Filter by Country <IoFilterOutline /></label>
                            <select placeholder="Priority" className="border-[2px] bg-black text-white border-white px-2 py-1.5 rounded-sm font-bold text-sm w-[140px]" value={Country} onChange={handleCountryFilter}>
                                <option value="all" disabled>Select </option>
                                {
                                    Countries?.map((country) => <option key={country} value={country}> {country}</option>)
                                }
                            </select>
                        </div>
                        <div className="flex gap-3 items-center p-5">
                            <label className="text-sm font-bold flex justify-center items-center gap-2 text-white">Filter by Genre <IoFilterOutline /></label>
                            <select placeholder="Priority" className="border-[2px] bg-black text-white border-white px-2 py-1.5 rounded-sm font-bold text-sm w-[140px]" value={Genre} onChange={handleGenreFilter}>
                                <option value="all" disabled>Select </option>
                                {
                                    Genres?.map((genre) => <option key={genre} value={genre}> {genre}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-around items-center gap-5 gap-y-10">
                        {
                            filterMoviesByGenre?.map((movie, idx) => <MovieCart key={idx} movie={movie} />)
                        }
                    </div>
                    <div className=" py-10">
                        {
                            filterMoviesByGenre?.length < 1 && <NoMoviesAvailable />
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default Movies;