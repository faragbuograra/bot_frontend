import { Info } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import DrawerAppBar from "./com/header";
import Sidebar from "./com/NavBar";
import { Home } from "./Page/home";
import { Infoo } from "./Page/info";

function App() {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [state, setState] = useState({});
//   const [type, setType] = useState("");
//   async function onclick(params) {
//     const response = await axios.post('http://3.223.187.125:8001/api/v1/admin/employ', {
//       name:name,
//       number:number,
//       type:type
//     }).then((e)=>{
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Your work has been saved",
//         showConfirmButton: false,
//         timer: 1500
//       });
//     })

//     get()
//   }
  
//   function get(){
//     axios.get(`http://3.223.187.125:8001/api/v1/admin/employ`)
//     .then(res => {
// console.log(res.data)
//       setState(res.data);
//     })
//   }
//   const columns = [
//     { field: 'id', headerName: 'Column 1', width: 150 },
//     { field: 'name', headerName: 'Column 1', width: 150 },
//     { field: 'number', headerName: 'Column 2', width: 150 },
//     { field: 'type', headerName: 'Column 2', width: §150 },
//     { field:  "status", headerName: 'Column 2', width: 150 },
   
//   ];

    return (
      <div style={{
        background:'white',
        height :'100vh'

      }} >
 <div className="flex" >
        <Sidebar/>
    
    
    <div >
    
    
    <Routes>
  
    <Route path="/"  element={ <Home/>}></Route>
    <Route path="/Gtgs"  element={ <Home/>}></Route>
    <Route path="/NewGtgs"  element={ <Infoo/>}></Route>
    

    
    
    
    </Routes>
    
    </div>
    
    </div>
        </div>
      );
    }

export default App;
