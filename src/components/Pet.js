import React from 'react';

export default function Pet(props) {
  
  return (
    <section className='petToAdopt'>
      <header>
        <h2>{props.petToAdopt.name}</h2>
        <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription}/>
      </header>
      <main>
        <dl>
          <dt>{props.petToAdopt.sex}</dt>
          <dt>{props.petToAdopt.age}</dt>
          <dt>{props.petToAdopt.breed}</dt>
          <dt>{props.petToAdopt.story}</dt>
        </dl>
        <button onClick={props.onAdopt}>Adopt</button>
      </main>
    </section>
  );
}