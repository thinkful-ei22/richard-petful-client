import React from 'react';
import Pet from './components/Pet';
import { connect } from 'react-redux';
import { fetchAnimal, adpotAnimal } from './actions';


export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
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
  render() {
    return(
      <main className='dashboard'>
        <h1>PETFUL-APP</h1>
        <Pet petToAdopt={this.props.cat} onAdopt={() => this.onAdoptCat()} />  
        <Pet petToAdopt={this.props.dog} onAdopt={() => this.onAdoptDog()}/>
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