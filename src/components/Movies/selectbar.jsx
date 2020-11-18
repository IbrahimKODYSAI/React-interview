import { useState, useEffect } from 'react';


const SelectBar = ({setAllMovies}) => {

  const [ selectedCategory, setSelectedCategory] = useState([]);
  const [ staticMoviesData, setStaticMoviesData ] = useState([]);

  async function getMovies() {
    const response = await import("../../data/movies.js");
    const data = await response.movies$
    setStaticMoviesData(data)
  }
  useEffect(() => {
    getMovies();
  }, []);
 
  function newCatageoriesData() {
    const allCategories = staticMoviesData.map((movie) => {
      return movie.category
    })
    const newCategories = [...new Set(allCategories)]
    return newCategories
  }
  const categories = newCatageoriesData();

  useEffect(() => {
    newCatageoriesData();
  }, []);

function selectCat(e) {
  console.log(e.target.value)
  const selectedCategories = [
    ...selectedCategory,
    e.target.value
  ]
  if(selectedCategories.filter((category, index) => selectedCategories.indexOf(category) !== index).length < 1 ) {
    setSelectedCategory(selectedCategories)
    console.log(selectedCategories)
  }
  filterMovies(selectedCategories);
}

 function filterMovies(selectedCategories) {
   for(let i = 0; i < selectedCategories.length; i++){
     const filteredMovies = staticMoviesData.filter((movie) => {
       return movie.category === selectedCategories[i]
   
     })
     setAllMovies([...filteredMovies])
   }
  }
  
 function deleteSelectedCategory(selCategory) {
  const afterDeleteCategories = selectedCategory.filter((category => category !== selCategory))
  setSelectedCategory(afterDeleteCategories)
  filterMovies(afterDeleteCategories)
 }

  return (
    <div>
      <div className="selected-categories">
        {selectedCategory.map(category => (
          <span>{category} <button onClick={() => deleteSelectedCategory(category)}>x</button></span>
        ))}
      </div>
      <select className="select-button" onInput={(e)=>selectCat(e)} name="" id="">
        <option value="null"
          selected="selected"
          disabled="disabled"
        >
          All categories
        </option>
        {categories.map((category, index) => (
          <option className="select-button_option" key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectBar;