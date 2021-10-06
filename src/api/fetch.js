// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   const [loading, setLoading] = useState(true);
//   const [result, setResult] = useState([]);

//   useEffect(async () => {
//     try {
//       const response = await axios.get(url);
//       setResult(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//     }
//   }, [url]);

//   return { loading, result };
// };

// export default useFetch;

// export const searchPokemon = async (pokemon) => {
//     try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//         const data = await response.json()
//         return data
//     } catch (error) {
        
//     }
// } 


// export default function debounceFunction (fn, delay) {
//     let timer;
//     return function() {
//         const self = this;
//         const args = arguments;
//         clearTimeout(timer);
//        timer = setTimeout(function() {
// -           fn.apply(self, args);
//         }, delay);
//     }
// }
