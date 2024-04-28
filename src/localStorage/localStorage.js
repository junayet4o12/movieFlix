export const storedMovies = () => {
    const storedMoviesCollection = JSON.parse(localStorage.getItem('movies'));
    if (storedMoviesCollection) {
        return storedMoviesCollection;
    } else {
        return []
    }
}

export const moviesCollectionForStoring = (id) => {
    const alreadyStoredMovies = storedMovies()
    const isExist = alreadyStoredMovies?.find(movieId => movieId === id)
    if (isExist) {
        return console.log('AlreadyExist');
    } else {
        const finalDataForStoring = [...alreadyStoredMovies, id];
        localStorage.setItem("movies", JSON.stringify(finalDataForStoring));
    }
}