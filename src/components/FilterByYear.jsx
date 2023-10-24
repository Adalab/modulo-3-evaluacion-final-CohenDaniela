


const FilterByYear = ({ yearFilter, moviesList, handleChangeYears, years }) => {



  ///funcion manejadora del select que envia el valor por lifting
  const handleSelect = (ev) => {

    handleChangeYears(ev.target.value)

  }

  ///funcion para mostrar todos los años en los optios del select de manera ordenada
  const renderYearsoptions = () => {
    const sortedYears = years
      .map((year) => parseInt(year))
      .sort((a, b) => b - a);

    return sortedYears.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };


  return (
    <>
      <label htmlFor="search_year">


        <select
          name="search_year"
          id="search_year"
          value={yearFilter}
          onChange={handleSelect}>
          <option value=""  > Año</option>
          {renderYearsoptions()}
        </select>


      </label>

    </>
  );
};
export default FilterByYear;