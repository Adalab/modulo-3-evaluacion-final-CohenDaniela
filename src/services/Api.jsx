///fetch
const getDataApi = ()=> {
    return fetch ('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
    .then((response) => response.json())
    .then((data)=>{
        const cleanData = data.map((item)=> {
          return {
            movie: item.movie,
            poster: item.poster,
            fullLine: item.full_line,
            year: item.year,
            audio: item.audio
          };
        });
      
   return cleanData;
      
    });


};

export default getDataApi;