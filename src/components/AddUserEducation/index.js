import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { DatePicker } from 'material-ui';
import moment from 'moment';

const renderField = props => (
  <div>
    <label>{props.placeholder}</label>
    <div>
      <input {...props} />
      {props.touched && props.error && <span>{props.error}</span>}
    </div>
  </div>
)


const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      label={label}
      // hintText={label}
      // floatingLabelText={label}
      // errorText={touched && error}
      {...input}
      {...custom}
      value={moment(input.value).format('YYYY-MM-DD')}
    />
  )

  
const renderTextField2 = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      {...input}
      {...custom}
    />
  )

  



const renderMembers = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Education</button>
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)} />
        <h4>Institution {index + 1}</h4>
        <Field
          name={`${member}.institution`}
          type="text"
          component={renderTextField2}
          placeholder="Institution Name" />
        <br />
        <Field
          name={`${member}.description`}
          type="text"
          component={renderTextField2}
          placeholder="Description" />
        <br />
        <Field
          name={`${member}.startDate`}
          type="date"
          label="Start Date"
          component={renderTextField}
          placeholder="Start Date" />
        <br />
        <Field
          name={`${member}.endDate`}
          type="date"
          label="End Date"
          component={renderTextField}
          placeholder="End Date" />

      </li>
    )}
  </ul>
)

const FieldArraysForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  const onAddFunction = (x) => {
    for (let i = 0; i < x.members.length; i++) {
      x.members[i].userId = props.userId;
      console.log(x.members[i], props.userId)
      props.onCreateEducation(x.members[i]);
    }
  }

  return (
    <form onSubmit={handleSubmit(onAddFunction)}>
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldArrays',     // a unique identifier for this form
})(FieldArraysForm)