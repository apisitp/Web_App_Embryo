import './App.css';
import React, { useState } from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='grid-container'>
          <div className='grid-item'>
            <h1>HUMAN EMBRYO  <br />GRADING MODEL  <br />DEMONSTRATION</h1>
            <p>สาธิตโมเดลการให้คะแนน <br />คุณภาพตัวอ่อน</p>
            <img src='https://s3-alpha-sig.figma.com/img/cba7/faa6/05405946ccfd53e3bb0ea759ca0db8c5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M42D-rH-DRk1ikOGAsBb4Amo1GYpDYQYYsY895zfeceVBvhSzH3yqdvY0jYZPHaAgv615JbzkRdxgGye3Mcv3jpSSF5om6w0bMjmcLpxuTOT~I7GT4JJC5WJqGjzb4z3850DhoScE3hC8g2xjU4V~1MSZJHSzDiKYj4DYDqIynB9TFyk3iV5I~~Wepw36R8F8GnCFROs9m4XPnfVteUCFJTuynud6TLrsRQkyKvzFJgMpGQdu~fNaFc3Co-ziwkpuoCG0FU2GzH1BK~ggB7~ZkZp0dh53QxMwcTrU6ZSeCy27dJyqsQrMNjwlzconbbosSyeR0Ft8u1tJUtOo6GX9w__'></img>
          </div>
          <div className='grid-item'>
            <div className='demonstration-box'>
              <ImageUpload />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

function ImageUpload() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  console.log(selectedButton);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const grade = () => {
    if (selectedButton == null || selectedImage == null) {
      alert("fuck")
    }
    else {
      alert("grade is Allahhhhhhhhh");
    }

  }
  return (
    <div>
      <div class="model-select">
        <button
          className='button'
          onClick={() => handleButtonClick("InceptionV3")}

          style={{ backgroundColor: selectedButton === "InceptionV3" ? 'white' : '#343434', color: selectedButton === "InceptionV3" ? '#343434' : 'white' }}
        >
          InceptionV3 {selectedButton === "InceptionV3"}
        </button>
        <button
          className='button'
          onClick={() => handleButtonClick("Xception")}
          style={{ backgroundColor: selectedButton === "Xception" ? 'white' : '#343434', color: selectedButton === "Xception" ? '#343434' : 'white' }}
        >
          Xception {selectedButton === "Xception"}
        </button>
      </div>
      <div class="container">
        <div>
          <div class="upload-container">
            <input type="file" id='upload' accept="image/*" onChange={handleImageChange} />
            <label for="upload"> Upload Image to Grade </label>
          </div>
        </div>
        <div>
          <button class="button-grade" onClick={grade}> Grade </button>
        </div>
      </div>
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Preview"
            style={{ maxWidth: '421px', maxHeight: '487px', border: '3px solid white', borderRadius: '25px', padding: '2px', marginTop: '.5em' }}
          />
        </div>
      )}
    </div>
  );
}


function ModelSelector() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  console.log(selectedButton);
  return (
    <div class="model-select">
      <button
        className='button'
        onClick={() => handleButtonClick("InceptionV3")}

        style={{ backgroundColor: selectedButton === "InceptionV3" ? 'white' : '#343434', color: selectedButton === "InceptionV3" ? '#343434' : 'white' }}
      >
        InceptionV3 {selectedButton === "InceptionV3"}
      </button>
      <button
        className='button'
        onClick={() => handleButtonClick("Xception")}
        style={{ backgroundColor: selectedButton === "Xception" ? 'white' : '#343434', color: selectedButton === "Xception" ? '#343434' : 'white' }}
      >
        Xception {selectedButton === "Xception"}
      </button>
    </div>
  );
}
