import React, { useState } from "react";
import axios from 'axios';
import ImageThumb from "./components/UI/ImageThumb/ImageThumb";
import './App.css';
import Button from "./components/UI/Button/Button";
import ShowPredict from "./components/UI/ShowPredict/ShowPredict";

function App() {

  const [file, setFile] = useState(null)

  let url = 'http://localhost:8000/upload/'

  const imgUpload = e => {
    setFile(e.target.files[0]);
  }
  
  const [pred, setPred] = useState(null)

  const makePredict =()=> {
    axios.get(url).then(res => {
      const persons = res.data;
      setPred(persons);
    })
  }

  const uploadImg = async (e, cb) =>{
    e.preventDefault();
    const formData = new FormData();
      formData.append(
         "file",
         file,
         file.name
      );
    const img = await axios.post(url, formData).then(response => response.data)
    cb()
  };
    return(
        <div className="App">
        <header className="App-header">
        <form onSubmit={(e)=>uploadImg(e, makePredict)}>
          <ShowPredict pred = {pred}/>
          <ImageThumb image={file} />
          <div className="file-upload">
          <label>
              <input onChange = {imgUpload} name = 'image' type = 'file' accept=".jpeg, .png, .jpg"/>
              <span>Сhoose file</span>
            </label>
            </div>
            <Button />
          </form>
        </header>
      </div>
    );
}

export default App;
