import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteIcon from '@material-ui/icons/Delete';
import './movies.css';
import SelectBar from './selectbar.jsx'
const Movies = ({ 
  allMovies,
  setAllMovies,
  moviePerPage,
  setMoviePerPage,
  unchangedMoviesList
}) => {

  function removeMovie(id) {
    const movies = allMovies.filter((movie => movie.id !== id))
    console.log(movies)
    setAllMovies(movies)
  }
  function setLike(i) {
    const updatedMovies = [...unchangedMoviesList]
    const movie = updatedMovies[i]
    updatedMovies[i] = {
      ...movie,
      isLiked: !movie.isLiked,
      likes: movie.isLiked
      ? movie.likes -1 
      : movie.likes +1
    }
  console.log(updatedMovies)
  setAllMovies(updatedMovies)
}
function setDislike(i) {
  const updatedMovies = [...unchangedMoviesList]
  const movie = updatedMovies[i]
  updatedMovies[i] = {
    ...movie,
    isDisliked : !movie.isDisliked,
    dislikes: movie.isDisliked
    ? movie.dislikes - 1
    : movie.dislikes + 1
  }
console.log(updatedMovies)
setAllMovies(updatedMovies)
}

function handleLike(i) {
  const updatedMovies = [...unchangedMoviesList]
  const movie = updatedMovies[i]
  if (movie.isDisliked) {
    setLike(i);
    setDislike(i);
  }
  setLike(i);
}

function handleDislike(i) {
  const updatedMovies = [...unchangedMoviesList]
  const movie = updatedMovies[i]
  if (movie.isLiked) {
    setDislike(i);
    setLike(i);
  }
  setDislike(i);
}
function handleMoviePerPage(e) {
  setMoviePerPage(e.target.value)
}
function likeBarStyle(movie) {
  return {
    backgroundColor:'#318CE7',
    width: Math.floor((movie.likes/(movie.likes + movie.dislikes)) * 100)+'%',
    height:'100%'
  }
}
  return (
    <div>
      <h2>Films list</h2>
        <SelectBar 
          allMovies={allMovies}
          setAllMovies={setAllMovies}
          unchangedMoviesList={unchangedMoviesList}
        /> Movie per page : 
        <select className="movieperpage-button" onInput={(e) => handleMoviePerPage(e)} name="" id="">
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
        <div className='movie-container'>
          {allMovies.map((movie, index) => (
            <div className="movie-card" key={movie.id} 
            style={{
              backgroundImage: `url(${movie.img})`,
            }}>

              {/* {movie.img &&
                <img src={movie.img || null} alt="movie"/>
              } */}

              <div className="delete-button">
                <DeleteIcon  onClick={()=>{removeMovie(movie.id)}}/>
              </div>
              <div className="info-container">
                <h4>{movie.title}</h4>
                <span>Category : {movie.category}</span>
                <div className="likes-counter">
                  <ThumbUpIcon 
                    className={movie.isLiked===true ? 'active-like' : 'favorite'}
                    onClick={()=>{handleLike(index)}}
                  />
                  <span>{movie.likes}</span>
                  <ThumbDownIcon
                    className={movie.isDisliked===true ? 'active-like' : 'favorite'}
                    onClick={()=>{handleDislike(index)}}
                  />
                  <span>{movie.dislikes}</span>
                </div>
              </div>
              <div className='jauge-container'>
                <div style={likeBarStyle(movie)}></div>
              </div>
            </div>          
          ))}
        </div>
    </div>
  )
}

export default Movies;