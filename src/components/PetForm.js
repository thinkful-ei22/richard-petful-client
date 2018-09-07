import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';
// const { DOM: {input, select, textarea}} = React;

let PetForm = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit} className='petForm'>
      <h2>Add a pet for adoption?</h2>
      <div className='name'>
        <label htmlFor='name'>Name</label>
        <Field name='name' component="input" type="text"/>
      </div>
      <div className='sex'>
        <label htmlFor='sex'>Gender</label>
        <Field name='sex' component="input" type="text"/>
      </div>
      <div className='img'>
        <label htmlFor='imageURL'>Image URL</label>
        <Field name='imageURL' component="input" type="text"/>
      </div>
      <div className='imgDesc'>
        <label htmlFor='imageDescription'>Image Description</label>
        <Field name='imageDescription' component="input" type="text"/>
      </div>
      <div className='age'>
        <label htmlFor='age'>Age</label>
        <Field name='age' component="input" type="text"/>
      </div>
      <div className='breed'>
        <label htmlFor='breed'>Breed</label>
        <Field name='breed' component="input" type="text"/>
      </div>
      <div className='story'>
        <label htmlFor='story'>Story</label>
        <Field name='story' component='textarea' type="text"/>
      </div>
      <div className='catdog'>
        <label><Field name='species' component='input' type="radio" value="dog"/>Dog</label>
        <label><Field name='species' component='input' type="radio" value="cat"/>Cat</label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset('pet'));

PetForm = reduxForm({
  form: 'pet',
  onSubmitSuccess: afterSubmit,
})(PetForm);

export default PetForm;