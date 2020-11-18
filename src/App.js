import './App.css';
import { useState, useEffect } from 'react';
import Movies from './components/Movies';
import Pagination from './components/Pagination';

function App() {

  const [ allMovies, setAllMovies ] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage, setMoviePerPage] = useState(4);


  async function getMovies() {
    const response = await import("./data/movies.js");
    const data = await response.movies$
    setAllMovies(data)
  }
  useEffect(() => {
    getMovies();
    console.log(allMovies);
  }, []);

  const idOfLastMovie = currentPage * moviePerPage;
  const idOfFirstMovie = idOfLastMovie - moviePerPage;
  const currentMovies = allMovies.slice(idOfFirstMovie, idOfLastMovie);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div className="App">
      <header className="App-header">
        <h1>Particeep Movies</h1>
      </header>
      <Movies
        allMovies={currentMovies}
        setAllMovies={setAllMovies}
        moviePerPage={moviePerPage}
        setMoviePerPage={setMoviePerPage}
        unchangedMoviesList={allMovies}
      />
      <Pagination
        moviePerPage={moviePerPage}
        totalPosts={allMovies.length}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
