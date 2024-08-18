import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [label, setlabel] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Hello");
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict',
        formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setlabel(response.data['predicted_class'])
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <form name='image' onSubmit={handleSubmit}>
        <input type="file" name='imageUploaded' onChange={handleFileChange} />
        <button type='submit'>HIT API</button>
      </form>
      <div>{label}</div>
    </>
  )
}

export default App
