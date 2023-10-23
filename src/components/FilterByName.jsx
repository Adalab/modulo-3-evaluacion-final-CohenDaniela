///componente para el input del nombre d ela pelicula

const FilterByName = ({nameFilter, handleChange})=>{


    ///funcion manejadora input recoge el valor y utiliza funcion enviadad por props para guardarla y enviarla a App

    const handleInput =(ev)=> {
        handleChange(ev.target.value)
        

    }



    return (
        <>
        <label htmlFor="search_name">
            Nombre de la Película
            <input 
            type="text"
            name="search_name"
            id="search_name"
            value={nameFilter}
            onChange={handleInput} />
        </label>
        </>
    )
};
export default FilterByName;