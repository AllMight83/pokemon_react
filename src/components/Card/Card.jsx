import React, {useState, useEffect, useRef} from 'react';
import { useDebouncedCallback  } from 'use-debounce';
import axios from 'axios';
import Header from '../Header'

import One from '../One'

export const Card = () => {

    const [inputValue, setValue] = useState("");
    const [previous, setPrevious] = useState("");
    const [pokemon, setPokemon] = useState([]);
    

    const debounced = useDebouncedCallback(
      (inputValue) => {
        setValue(inputValue);
      },
      1000
    );
   
    useEffect(
        async function axiosData() {
          
          try{
            if(inputValue !== previous){
              const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
              console.log(res);
              setPokemon([...pokemon, res.data])
              
            }
          }catch(e){
            setPokemon([]);
          } 
        },
        [inputValue]
      );


      const handleSubmit = e => {
        e.preventDefault();
        setPrevious(inputValue);
        setValue(e.target.elements.name.value); //actualizo inputValue
        e.target.reset() //Limpiamos el formulario después del submit
        // setpreviousPost(posts.concat(previusPost));
    
      };

  
      const printPokemon = () => {
        return pokemon.map((item, i)=> <One item={item} key={i}/>)
      }
     

      const deleteAll = () => {
        setPokemon([])
      };


      return <div><Header />
      <section className="search">
    
      <h1 className="titulo">Busca tu Pokemon!!</h1>
   
        <form onSubmit={handleSubmit}>
          <input placeholder="Pikachu" autoComplete='off' className="input" name="name" onChange={(e) => debounced(e.target.value)}/>
         
        </form>
         

        {printPokemon()}
    <button onClick={deleteAll} className="reset">Reset</button>
 
    </section>;
      </div>
}


export default Card



