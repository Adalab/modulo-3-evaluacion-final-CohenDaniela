
import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';


function App() {

  ///constantes de estado

  const [moviesList, setmoviesList] = useState([]);
  const [nameFilter , setNameFilter] = useState ('');
  const [yearFilter, setYearFilter] = useState ('');




  ///guardo cleanData

  useEffect(() => {
    getDataApi().then((cleanData) => {
      setmoviesList(cleanData)
    });



  }, []);

 ///funciones manejadoras

/// guardo el valor del input de FilterByName
 const handleChange =(value)=> {
  setNameFilter(value);
 }

 ///guardo el valor de filterByYear
 const handleChangeYears =(value)=>{
  setYearFilter(value)
 }


 ///otras funciones
///funcion filtrar por nombre y año pasarla a movieSceneList par renderizar

const filteredMovies = moviesList.filter((movie) =>
movie.movie.toLowerCase().includes(nameFilter.toLowerCase())
).filter(item=>{
  if(yearFilter === '') {
    return true
  }else {
    return parseInt(yearFilter) === item.year
  }
})
///obtener los años para pintarlos en los options

// const years = moviesList.map(item=>item.year)

///funcion para q los valores en los opions de years sean Únicos

const getYears =()=>{
  const years = moviesList.map(item=>item.year)
  const uniqueYear = new Set(years);
  const uniqueArray = [...uniqueYear];
  return uniqueArray

}




  return (
    <div>
      <header className='header'>
        <h1>Owen Wilson´s "Wow"
        </h1>
        <p></p>
      </header>
      <main className='main'>
        <Filters 
        nameFilter= {nameFilter}
        yearFilter= {yearFilter}
        handleChange= {handleChange}
        moviesList={moviesList}
        handleChangeYears={handleChangeYears}
        years={ getYears()}


       
        
        />
        <section className='container'>
          <MovieSceneList moviesList={filteredMovies}
          />
            
          

        </section>
      </main>
    </div>





  );



};

export default App;