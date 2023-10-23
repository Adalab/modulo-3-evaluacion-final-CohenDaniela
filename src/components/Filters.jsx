import React from "react"
import FilterByName from "./FilterByName"
import FilterByYear from "./FilterByYear"



const Filters = ({ 
    nameFilter,
    yearFilter,
    handleChange,
    moviesList,
    handleChangeYears,
    years
    
    
}
) => {

    ///funcion para el event prevent default
    const handleSubmit = (ev) => {
        ev.preventDefault(); 
      }
    


    return (
        <>
            <h3>Busca tu Owen´s Wow por...</h3>
            <form
                onSubmit={handleSubmit}

            >
                <FilterByName
                    nameFilter={nameFilter}
                    handleChange={handleChange}
                />
                <FilterByYear
                    yearFilter={yearFilter}
                    moviesList={moviesList}
                    handleChangeYears={handleChangeYears}
                    years={years}

                />
            </form>

        </>
    )

}
export default Filters