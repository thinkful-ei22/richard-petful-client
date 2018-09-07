import React from 'react';

export default function Dashboard(props) {
  const handleCatClick = () => {
    console.log('I have been cat clicked');
  };
  const handleDogClick = () => {
    console.log('I have been dog clicked');
  };
  return(
    <div>
      <section className='catToAdopt'>
        <header>
          <h2>{props.catToAdopt.name}</h2>
          <img src={props.catToAdopt.imageURL} alt={props.catToAdopt.imageDescription}/>
        </header>
        <main>
          <dl>
            <dt>{props.catToAdopt.sex}</dt>
            <dt>{props.catToAdopt.age}</dt>
            <dt>{props.catToAdopt.breed}</dt>
            <dt>{props.catToAdopt.story}</dt>
          </dl>
          <button onClick={() => handleCatClick()}>Adopt</button>
        </main>
      </section>
      <section className='dogToAdopt'>
        <header>
          <h2>{props.dogToAdopt.name}</h2>
          <img src={props.dogToAdopt.imageURL} alt={props.dogToAdopt.imageDescription}/>
        </header>
        <main>
          <dl>
            <dt>{props.dogToAdopt.sex}</dt>
            <dt>{props.dogToAdopt.age}</dt>
            <dt>{props.dogToAdopt.breed}</dt>
            <dt>{props.dogToAdopt.story}</dt>
          </dl>
          <button onClick={() => handleDogClick()}>Adopt</button>
        </main>
      </section>
    </div>
  );
}