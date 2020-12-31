import React, { useEffect, useState } from 'react'
import PokemonCard from '../PokemonCards'
import '../../App.css';
import Test2 from '../test2';
import { Grid } from '@material-ui/core';
function Home() {
    const [pokemonData,setPokemonData] = useState([])
   const PokemonData= JSON.parse(localStorage.getItem('PokemonData')) ;
    // console.log(PokemonData);
    // function PostData(){
    //     fetch("http://localhost/Data_api.php", {  
    //               method: "POST",
                  
                  
    //             }).then(function(response) {
    //               console.log(response.status);
    //               // console.log(response.text);
    //               return response.json();
    //             }).then(function(data) {
    //               console.log(data);
    //               setPokemonData(data)
    //             //   localStorage.setItem('PokemonData',JSON.stringify(data))
    //             } )
    
    //   }
    //   useEffect(()=>{
    //     PostData();
    //     // console.log(P);
      
    //   },[])
  
    return (
         <Grid style={{background:"#220326",width:"100%",marginLeft:"20px",marginTop:"70px"}}container xs={12} md={12} sm={12} justify="center" alignItems="center" >

   
            {PokemonData.map((item)=>(
                // <PokemonCards pid={item.id} pname={item.Name}/>
                <PokemonCard pid={item.id} pname={item.Name} ptype1={item.Type1} ptype2={item.Type2}
                ptotal={item.Total} pAttack={item.Attack} pDefense={item.Defense} pSpeed={item.Speed} pLegendary={item.Legendary} />
                ))}
             
        </Grid>
      
    )
}

export default Home
