import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import DrawerAppBar from "../com/header";

export function Infoo() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState({});
  const [type, setType] = useState("");
  async function onclick(params) {
    const response = await axios
      .post("http://3.223.187.125:8001/api/v1/admin/employ", {
        name: name,
        number: number,
        type: type,
      })
      .then((e) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
  return (
    <>
      <input onChange={(e) => setName(e.target.value)} value={name}></input>
    </>
  );
}
