
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router';
import { matchPath } from 'react-router-dom';
import { Link } from 'react-router-dom';


import getDataApi from '../services/api';
import MovieSceneList from './MovieSceneList';
import MovieSceneItem from './MovieSceneItem';
import Filters from './Filters';
import MovieSceneDetail from './movieSceneDetail';


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

///funcion para q encontrar los valores en los opions de years y que sean Únicos

const getYears =()=>{
  const years = moviesList.map(item=>item.year)
  const uniqueYear = new Set(years);
  const uniqueArray = [...uniqueYear];
  return uniqueArray

}
///buscar la escena por id
///encontrar el id con uselocation

const {pathname}= useLocation();
const routeData = matchPath('/scene/:id', pathname);

const sceneId = routeData!==null ? routeData.params.id : "";


///buscar escena por id
 const sceneData = moviesList.find(item => item.id === sceneId);






  return (
    <div>
      <header className='header'>
        <h1 className='title'>
          {/* Owen Wilson´s "Wow" */}
        </h1>
        <p></p>
      </header>

      <Routes>
        <Route
        path='/'
        element= {
          
          <>
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
          {filteredMovies.length === 0 ? (
            <p className='errormsg'>ops! esto no es muy wow! prueba de nuevo!
            </p> 
          ) :( <MovieSceneList moviesList={filteredMovies}/>) }
         
            
          

        </section>
      </main>
          </>


        }
        
        />
      <Route
      path='/scene/:id'
      element={
       <>
       < MovieSceneDetail movie={sceneData}
       
       
      
       />
       <Link to="/" >
        Volver
       </Link>
      
      
       
       
       </>
      }
      
      
      />
        
      </Routes>


    </div>





  );



};

export default App;