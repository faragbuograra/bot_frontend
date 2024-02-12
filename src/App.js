import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState({});
  const [type, setType] = useState("");
  async function onclick(params) {
    const response = await axios.post('http://3.223.187.125:8001/api/v1/admin/employ', {
      name:name,
      number:number,
      type:type
    }).then((e)=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })

    get()
  }
  function get(){
    axios.get(`http://3.223.187.125:8001/api/v1/admin/employ`)
    .then(res => {
console.log(res.data)
      setState(res.data);
    })
  }
  const columns = [
    { field: 'id', headerName: 'Column 1', width: 150 },
    { field: 'name', headerName: 'Column 1', width: 150 },
    { field: 'number', headerName: 'Column 2', width: 150 },
    { field: 'type', headerName: 'Column 2', width: 150 },
    { field:  "status", headerName: 'Column 2', width: 150 },
   
  ];
  return (
    <>
    <label
    >
      enter number
    </label>
      <input
        name="number"
        onChange={(e) => {
         setNumber(
          e.target.value
         )
        }}
      ></input>
    <br>
    </br>
    <label
    >
      enter name
    </label>
      <input
        name="name"
        onChange={(e) => {
         setName(
          e.target.value
         )
        }}
      ></input>
          <br>
    </br>
    <label
    >
      enter type
    </label>
      <input
        name="type"
        onChange={(e) => {
         setType(
          e.target.value
         )
        }}
      ></input>
      <br></br>
      <button
      onClick={(e)=>{
        onclick()
      }}
      >
        done
      </button>
      <button 
      onClick={()=>{
        get()
      }}
      >
        get
      </button>
      <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={state.data ? state.data : []} columns={columns} />
      </div>
    </>
  );
}

export default App;
