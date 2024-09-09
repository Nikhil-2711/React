const WatchedMovieList=({watched,onDeleteWatched})=>{
    return(
        <ul className="list">
            {watched.map((movie)=>(
                <WatchedMovie
                    movie={movie}
                    key={movie.imdbID}
                    onDeleteWatched={onDeleteWatched}
                />
            ))}
        </ul>
    )
}

const WatchedMovie=({movie,onDeleteWatched})=>{
    return(
        <li>
            <img src={movie.poster} alt={`${movie.title} poster`}/>
            <h3>{movie.title}</h3>
            <div>
                <p>
                    <span>⭐</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⌛</span>
                    <span>{movie.runtime}</span>
                </p>
                <button className="btn-delete" onClick={()=>onDeleteWatched(movie.imdbID)}>
                    X
                </button>
            </div>
        </li>
    )
}
export default WatchedMovieList