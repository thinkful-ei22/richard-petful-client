import React from 'react';
import {reduxForm, Field} from 'redux-form';

let PetForm = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a pet for adoption?</h2>
      <div>
        <label htmlFor='name'>Name</label>
        <Field name='name' component="input" type="text"/>
      </div>
      <div>
        <label htmlFor='sex'>Gender</label>
        <Field name='sex' component="input" type="text"/>
      </div>
      <div>
        <label htmlFor='imageURL'>Image URL</label>
        <Field name='imageURL' component="input" type="text"/>
      </div>
      <div>
        <label htmlFor='imageDescription'>Image Description</label>
        <Field name='imageDescription' component="input" type="text"/>
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <Field name='age' component="input" type="text"/>
      </div>
      <div>
        <label htmlFor='breed'>Breed</label>
        <Field name='breed' component="input" type="text"/>
      </div>
      <div>
        <label htmlFor='story'>Story</label>
        <Field name='story' component="input" type="text"/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

PetForm = reduxForm({
  form: 'pet'
})(PetForm);

export default PetForm;