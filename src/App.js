import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import yesImage from './img/menhera-chan-love.gif'
import yesImageTwo from './img/menhera-chan-hoodie.gif'

import noImage from './img/menhera-chan-patapata.gif'

import question from './img/question.jpg'

const yesImages = [
  yesImage,
  yesImageTwo,
  // Add more image paths as needed
];

function App() {
  const [message, setMessage] = useState("Will you be my valentine?");
  const [imageSrc, setImageSrc] = useState(question);
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * yesImages.length);
    return yesImages[randomIndex];
  };

  const handleYesClick = () => {
    setMessage("Great! Let's plan something special 🌹");
    setImageSrc(getRandomImage());
    setButtonsVisible(false);
  };

  const handleNoClick = () => {
    setMessage("Oh, you said NO. Are you sure? Maybe reconsider?");
    setImageSrc(noImage);
  };

  return (
    <>
      <div>
        <h2>{message}</h2>
        <img src={imageSrc} alt="Test" style={{ width: '100%', maxWidth: '500px' }} />
      </div>


      {buttonsVisible && (
        <>
          <button type="button" className="btn btn-outline-primary btn-lg" onClick={handleYesClick}>
            YES
          </button>
          <button type="button" className="btn btn-outline-danger btn-lg" onClick={handleNoClick}>
            NO
          </button>
        </>
      )}
    </>
  );
}

export default App;