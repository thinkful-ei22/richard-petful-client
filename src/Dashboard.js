import React from 'react';
import Pet from './components/Pet';

export default function Dashboard(props) {
  const onAdopt = () => {
    console.log('pet has been adopted');
  }
  return(
    <div>
      <Pet petToAdopt={props.catToAdopt} onAdopt={() => onAdopt()} />
      <Pet petToAdopt={props.dogToAdopt} onAdopt={() => onAdopt()}/>
    </div>
  );
}