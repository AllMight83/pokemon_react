import React from "react";

const One = (props) => {
  return (
    <>
      
        <div className="card">
          <div className="namepok">{props.item.name}</div>
          <div className="circle">
            <img src={props.item.sprites.front_default} className="poke" />
          </div>
        </div>
        <div className="faj"></div>
        <div className="ability">{props.item.abilities[0].ability.name}</div>
        
        <div className="order">#{props.item.order}</div>
      
    </>
  );
};

export default One;

{/* <section className="section">
<div className="card">
  <div className="namepok">{props.item.name}</div>
  <div className="circle">
    
      <img src={props.item.sprites.front_default} className="poke" />
  
  </div>
  <div className="ability">{props.item.order}</div>
</div>
</section> */}