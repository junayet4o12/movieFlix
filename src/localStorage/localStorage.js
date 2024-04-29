import Swal from "sweetalert2";
export const storedMovies = () => {
    const storedMoviesCollection = JSON.parse(localStorage.getItem('movies'));
    if (storedMoviesCollection) {
        return storedMoviesCollection;
    } else {
        return []
    }
}
export const removeMoviesIdFromLocalStorage = (id) => {
    const alreadyStoredMovies = storedMovies();
    const finalDataStoring = alreadyStoredMovies?.filter(movieId => movieId !== id);
    localStorage.setItem("movies", JSON.stringify(finalDataStoring));
    Swal.fire({
        icon: "success",
        title: "Movie has removed from your cart!!",
        showConfirmButton: false,
        timer: 1500
    });
}
export const moviesCollectionForStoring = (id) => {
    const alreadyStoredMovies = storedMovies()
    const isExist = alreadyStoredMovies?.find(movieId => movieId === id)
    if (isExist) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Already saved in your Cart!!",
            showConfirmButton: false,
            timer: 1500
        });
        return
    } else {
        const finalDataForStoring = [...alreadyStoredMovies, id];
        localStorage.setItem("movies", JSON.stringify(finalDataForStoring));
        Swal.fire({
            icon: "success",
            title: "Added to your Cart!!",
            showConfirmButton: false,
            timer: 1500
        });
    }
}
