import './App.css';
import Header from './components/Header';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Fiels from './components/fiels';
function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState([]);
  const addData = () => {
    setdata([...data, {
      name, email
    }])
    setname("");
    setemail("");
  }

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
          <TextField value={name} onChange={(event) => setname(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={email} onChange={(event) => setemail(event.target.value)} id="outlined-basic" label="email" variant="outlined" />
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
  data.map((element, index) => {
    return(
      <Fiels key={index} name={element.name} email={element.email} index={index} deleterecord={deleterecord}/>
    )
  })
}

      </div>




    </div>
  );
}

export default App;
