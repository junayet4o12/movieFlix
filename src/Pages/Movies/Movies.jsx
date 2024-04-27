import { useEffect, useState } from "react";
import Title from "../../Shared/Title/Title";
import MovieCart from "./MovieCart";
import { IoFilterOutline } from "react-icons/io5";
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [Language, setLanguage] = useState('all');
    const [Country, setCountry] = useState('all');
    const [Genre, setGenre] = useState('all');
    useEffect(() => {
        fetch('movies.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    function getUniqueArray(arrays) {
        // Flatten the array of arrays
        const flattenedArray = arrays.flat();

        // Remove duplicates using Set
        const uniqueLanguages = [...new Set(flattenedArray)];

        return uniqueLanguages;
    }
    const languagesArray = movies?.map(movie => movie?.movielanguages)
    const countryArray = movies?.map(movie => movie?.movielanguages)
    const genreArray = movies?.map(movie => movie?.moviegenres)
    // Flatten the array of arrays


    // Remove duplicates using Set
    const uniqueLanguages = getUniqueArray(languagesArray)
    const uniqueCountries = getUniqueArray(countryArray)
    const uniqueGenres = getUniqueArray(genreArray)
    console.log(uniqueLanguages);

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
    const filterMoviesByLanguage = uniqueLanguages.includes(Language) ? AllMovies?.filter(movie=> movie?.movielanguages.includes(Language)) : movies
    console.log(filterMoviesByLanguage?.length);

    return (
        <div className="bg-primary min-h-[calc(100vh-0px)] p-5  sm:p-10 sm:pt-24">

            <Title title1={`All`} title2={'Movies'} />
            <div className="flex gap-5 flex-wrap justify-around">
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
            <div className="flex flex-wrap justify-center items-center gap-5">
                {
                    filterMoviesByLanguage?.map((movie, idx) => <MovieCart key={idx} movie={movie} />)
                }
            </div>
        </div>
    );
};

export default Movies;