import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const fiels = ({name,email,index,deleterecord}) => {
  return (
   
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <stack>
      <Button  variant="contained" color="error" onClick={()=>deleterecord(index)}>
          <DeleteIcon />
          </Button>
          </stack>
     </div>

   
  )
}

export default fiels