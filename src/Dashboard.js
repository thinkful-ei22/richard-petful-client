import React from 'react';
import Pet from './components/Pet';
import PetForm from './components/PetForm';
import { connect } from 'react-redux';
import { fetchAnimal, adpotAnimal } from './actions';


export class Dashboard extends React.Component {

  componentDidMount() {
    console.log('mounted');
    this.props.dispatch(fetchAnimal('cat'));
    this.props.dispatch(fetchAnimal('dog'));
  }
  onAdoptDog() {
    console.log('dog has been adopted');
    this.props.dispatch(adpotAnimal('dog'));
  }
  onAdoptCat() {
    console.log('cat has been adopted');
    this.props.dispatch(adpotAnimal('cat'));
  }
  submit(values) {
    console.log(values);
  }
  render() {
    return(
      <main className='dashboard'>
        <Pet petToAdopt={this.props.cat} species={'cat'} onAdopt={() => this.onAdoptCat()} />  
        <Pet petToAdopt={this.props.dog} species={'dog'} onAdopt={() => this.onAdoptDog()}/>
        {/* <PetForm onSubmit={this.submit}/> */}
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  return ({
    cat: state.animal.catData,
    dog: state.animal.dogData,
  });
};

export default connect(mapStateToProps)(Dashboard);