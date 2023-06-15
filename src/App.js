import './App.css';
import Header from './components/Header';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Fiels from './components/fiels';
function App() {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  const[form,setForm] = useState({});
  const [data, setdata] = useState([]);
  const addData = () => {
    setdata([...data, form])
    setForm(form);
  };

const deleterecord=(index)=>{
let arr = data;
arr.splice(index,1);
setdata([...arr]);
}


  return (
    <div className="App">

      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField value={form.name} onChange={(event) => setForm({...form, name: event.target.value})} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={form.email} onChange={(event) => setForm({...form, email: event.target.value})} id="outlined-basic" label="email" variant="outlined" />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div >

              
      <div className="data">

     <div className="data_val">
      <h4>name</h4>
      <h4>email</h4>
      <h4>remove</h4>
     </div>


{
  data.map((e, index) => {
    return(
      <Fiels key={index} name={e.name} email={e.email} index={index} deleterecord={deleterecord}/>
    )
  })
}

      </div>




    </div>
  );
}

export default App;
