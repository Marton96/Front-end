import React from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';




const CreateForm = (props) => {

  let job = {
    "name": '',
    "description": '',
    "companyId": localStorage.getItem("COMPANY_ID")
  }

  let requirements=[  ];

  let benefits ={
    "name": [],
  }


  const onSubmit = () => {
    props.onCreate(job);
  }

  let rcounter = 0;
  const rlimit = 5;

  const addRequirementsInput = () => {
    if (rcounter == rlimit) {
      alert("You have reached the limit of adding " + rcounter + " requirements");
    }
    else {
      let newdiv = document.createElement('div');
      newdiv.innerHTML = " <br> <input type='text'>";
      document.getElementById('requirements').appendChild(newdiv);
      rcounter++;
    }
  }

  let bcounter = 0;
  const blimit = 5;

  const addBenefitsInput = () => {
    if (bcounter == blimit) {
      alert("You have reached the limit of adding " + bcounter + " benefits");
    }
    else {
      let newdiv = document.createElement('div');
      newdiv.innerHTML =  " <br> <input type='text'>";
      document.getElementById('benefits').appendChild(newdiv);
      bcounter++;
    }
  }

  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          required
          id="Name"
          label="Name"
          margin="normal"
          onChange={(e) => job.name = e.target.value}
        />

        <br />
        <TextField
          required
          id="Description"
          label="Description"
          margin="normal"
          onChange={(e) => job.description = e.target.value}
        />

        {/* <div id="requirements">
          <br />
          <h4>Add Job Requirements</h4>
          <br />
          <Button variant="fab" color="primary" aria-label="add" onClick={addRequirementsInput.bind(this)} >
            <AddIcon />
          </Button>
        </div>

         <div id="benefits">
          <br />
          <h4>Add Job Benefits</h4>
          <br />
          <Button variant="fab" color="primary" aria-label="add" onClick={addBenefitsInput.bind(this)} >
            <AddIcon />
          </Button>
        </div> */}
        <br />
        <br />
        <br />
        <Button
           onClick={onSubmit.bind(this)} 
          variant="raised" color="primary"  >
          CREATE JOB
             </Button>
      </form>
    </div>
  );
}

export default CreateForm
