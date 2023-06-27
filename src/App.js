import './App.css';
import Modal from 'react-modal';
import { useState } from 'react';

// Styling for the modal :-
let customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function App() {

  // Modal functionalities :-
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
      setIsOpen(true);
  }
  let subtitle;
  function afterOpenModal() {
    subtitle.style.color = 'rgb(78, 65, 65)';
    subtitle.style.textDecorationLine = 'underline';
  }
  function closeModal() {
      setIsOpen(false);
  }

  // Setting the result message :-
  const [result, setResult] = useState(null);
  const [color, setcolor] = useState(null);

  // Display image on upload :-
  const displayImage=(event)=>{
    const imageFile = event.target.files[0];
    const imageContainer = document.getElementById("imageContainer");
    const reader = new FileReader();
    reader.onload=(e)=>{
      const img = document.createElement("img");
      img.src = e.target.result;
      getPrediction(img.src);
      imageContainer.innerHTML = "";
      imageContainer.appendChild(img);
      document.querySelector('.container').style.justifyContent = 'space-around';
    };
    reader.readAsDataURL(imageFile);
  } 

  // Get the prediction from backend :-
  const getPrediction=async(img_src)=>{
    const res = await fetch('http://127.0.0.1:5000/predict', {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: `imageData=${encodeURIComponent(img_src)}`
    });
    const prediction = await res.json();
    if(res.status === 200){
      openModal();
      if(prediction.prediction === 1){
        setResult("Sorry, you have pneumonia.");
        setcolor("red");
      }
      else{
        setResult("Congratulations, you do not have pneumonia!");
        setcolor("green");
      }
    }
    else{
      console.log("Invalid image file");
    }
  }

  return (
    <div>
      <div id="nav">Pneumonia Classifier</div>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          style={customStyles}
          contentLabel="Login Page"
          id={'custom-modal'}
      >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Result</h2>
          <button onClick={closeModal} id='modalClose'><i className="fa-solid fa-xmark"></i></button>
          <p id='result' style={{color: color}}>{result}</p>
      </Modal>
      <div id="main">
        <div id="formHead">Upload chest x-ray</div>
        <div className="container">
          <form>
            <label htmlFor="imageInput" className="btn btn-primary">
              Choose Image
              <input type="file" id="imageInput" accept="image/*" style={{display: 'none'}} onChange={displayImage}/>
            </label>
          </form>
          <div id="imageContainer"></div>
        </div>
      </div>
    </div>
  );
}

export default App;