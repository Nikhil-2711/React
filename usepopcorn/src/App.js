import './App.css';
import {useState} from 'react'
import Navbar from './components/navbar';
import Search from './components/search';
import NumResults from './components/numresults';
import { useMovies } from './useMovies';
import Main from './components/main';
import Box from './components/box';
import { useLocalStorageState } from './uselocalstoragestate';
import Loader from './components/loader';
import MovieList from './components/movielist';
import MovieDetails from './components/moviedetails';
import WatchedSummary from './components/watchedsummary';
import WatchedMovieList from './components/watchedmovielist';

function App() {
  const [query,setQuery]=useState('')
  const {movies,isLoading,error}=useMovies(query)
  const [selectedId,setSelectedId]=useState(null)
  const [watched,setWatched]=useLocalStorageState([],"watched")

  function handleSelectMovie(id){
    setSelectedId((selectedId)=>(id===selectedId?null:id))
  }

  function handleAddWatched(movie){
    setWatched((watched)=>[...watched,movie])
  }
  function handleCloseMovie(){
    setSelectedId(null)
  }
  function handleDeleteWatched(id){
    setWatched((watched)=>watched.filter((movie)=>movie.imdbID!==id))
  }

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader/>}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>
          )}
        </Box>
        <Box>
          {selectedId ? (
              <MovieDetails
                selectedid={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              />
          ):(
            <>
              <WatchedSummary watched={watched}/>
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )
        }
        </Box>
      </Main>
    </>
  );
}

export default App;
