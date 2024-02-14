import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import yesImage1 from './img/menhera-chan-love.gif'
import yesImage2 from './img/menhera-chan-hoodie.gif'

import noImage1 from './img/are-you-sure.jpg'
import noImage2 from './img/connection.jpg'
import noImage3 from './img/change-mind.jpg'
import noImage4 from './img/keep-no.jpg'
import noImage5 from './img/rude-nasri-atweh.gif'
import noImage6 from './img/poem.jpg'
import noImage7 from './img/songAndPoem.png'
import noImage8 from './img/Two-Buttons.jpg'
import noImage9 from './img/kidding.png'
import noImage10 from './img/JustYes.jpg'
import noImage11 from './img/win.jpg'
import noImage12 from './img/gun.png'
import noImage13 from './img/cruel.png'
import noImage14 from './img/heh.jpg'
import noImage15 from './img/count.png'
import noImage16 from './img/menhera-chan-final.gif'
import noImage17 from './img/menhera-chan-patapata.gif'

import question from './img/question.jpg'

const yesImages = [
  yesImage1,
  yesImage2,
];

const noImages = [
  noImage1,
  noImage2,
  noImage3,
  noImage4,
  noImage5,
  noImage6,
  noImage7,
  noImage8,
  noImage9,
  noImage10,
  noImage11,
  noImage12,
  noImage13,
  noImage14,
  noImage15,
  noImage16,
  noImage17
]

function App() {
  const [message, setMessage] = useState("Will you be my valentine?");
  const [imageSrc, setImageSrc] = useState(question);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * yesImages.length);
    return yesImages[randomIndex];
  };

  const handleYesClick = () => {
    setMessage("Yayy! Let's plan something special 🌹");
    setImageSrc(getRandomImage());
    setButtonsVisible(false);
  };

  const handleNoClick = () => {
    setClickCount(prevCount => prevCount + 1);
    
    switch (clickCount) {
      case 0:
        setMessage("Oh~ Are you sure?");
        setImageSrc(noImages[0]);
        break;
      case 1:
        setMessage("Give it another thought because we had a connection?");
        setImageSrc(noImages[1]);
        break;
      case 2:
        setMessage("Is it something I said to change your mind?");
        setImageSrc(noImages[2]);
        break;
      case 3:
        setMessage("Why keep saying No?");
        setImageSrc(noImages[3]);
        break;
      case 4:
        setMessage("Why you gotta be so rude?");
        setImageSrc(noImages[4]);
        break;
      case 5:
        setMessage("Rose are red. Violets are blue. Sugar is sweet. Be my valentine?");
        setImageSrc(noImages[5]);
        break;
      case 6:
        setMessage("I like the song & poem. Being my valentine?");
        setImageSrc(noImages[6]);
        break;
      case 7:
        setMessage("Can you please stop clicking no?");
        setImageSrc(noImages[7]);
        break;
      case 8:
        setMessage("You know I won't let you done unless you click 'Yes'.");
        setImageSrc(noImages[8]);
        break;
      case 9:
        setMessage("Just do it ✔ Click 'Yes'");
        setImageSrc(noImages[9]);
        break;
      case 10:
        setMessage("Instruction to win the game: click 'Yes'");
        setImageSrc(noImages[10]);
        break;
      case 11:
        setMessage("Click 'Yes' I dare you!?");
        setImageSrc(noImages[11]);
        break;
      case 12:
        setMessage("How are you suppose to keep clicking no?");
        setImageSrc(noImages[12]);
        break;
      case 13:
        setMessage("Heh.. It won't end the question, just give up and click 'Yes'?");
        setImageSrc(noImages[13]);
        increaseSize();
        break;
      case 14:
      case 15:
      case 16:
        setMessage(`Note: you have denied ${clickCount + 1} times.`);
        setImageSrc(noImages[14]);
        increaseSize();
        break;
      case 17:
        setMessage("Last try, will you be my valentine?");
        setImageSrc(noImages[15]);
        break;
      default:
        setMessage("I get it. Maybe another time! (Clap)");
        setImageSrc(noImages[16]);
        setButtonsVisible(false);
        break;
    }

  };

  function increaseSize() {
    const newYesPadding = `${20 + (clickCount - 12) * 4}px ${30 + (clickCount - 12) * 4}px`;
    const newNoPadding = `${20 - (clickCount - 12) * 2.5}px ${30 - (clickCount - 12) * 2.5}px`;

    document.getElementById('yesButton').style.padding = newYesPadding;
    document.getElementById('noButton').style.padding = newNoPadding;
  }

  return (
    <>
    <div className="main-container">
      <div className="inner-container">
        <h2 className="header">{message}</h2>
        <img src={imageSrc} alt="Test" className="image" />

        {buttonsVisible && (
          <div className="button-container">
            <button
              type="button"
              id="yesButton"
              className={`btn btn-fancy-success btn-lg`}
              onClick={handleYesClick}
            >
              YES
            </button>
            <button
              type="button"
              id="noButton"
              className={`btn btn-fancy-danger btn-lg`}
              onClick={handleNoClick}
            >
              NO
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default App;