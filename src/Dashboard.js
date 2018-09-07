import React from 'react';
import Pet from './components/Pet';
import { connect } from 'react-redux';
import { fetchCat, fetchDog, adpotDog, adpotCat } from './actions';


export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('mounted');
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }
  onAdoptDog() {
    console.log('dog has been adopted');
    this.props.dispatch(adpotDog());
  }
  onAdoptCat() {
    console.log('cat has been adopted');
    this.props.dispatch(adpotCat());
  }
  render() {
    return(
      <div>
        <Pet petToAdopt={this.props.cat} onAdopt={() => this.onAdoptCat()} />  
        <Pet petToAdopt={this.props.dog} onAdopt={() => this.onAdoptDog()}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return ({
    cat: state.cat.data,
    dog: state.dog.data,
  });
};

export default connect(mapStateToProps)(Dashboard);