let cody = "Cody Maxie";

const textAnimElem = document.getElementById('text-animation');

let possibleText = [
  'webDeveloper','frontEndDesigner',
  'backEndProgrammer','hobbyServerAdmin',
  'linuxEnthusiast', 'pythonProgrammer',
];
let currentText = 0;

const textAnimation = () => {
  
  let intervalTypeText = setInterval(function() {
    typeText(possibleText[currentText])
  }, 200);
  
  const typeText = (text) => {
    if (document.getElementById('text-animation').textContent == text) {
      if (currentText == possibleText.length - 1) {
        currentText = 0;
      } else {
        currentText++;
      }
      clearInterval(intervalTypeText);
      setTimeout(function() {
        document.getElementById('text-animation').textContent = "";
        textAnimation()}, 4000);
    } else {
      document.getElementById('text-animation').textContent = text.substring(0, document.getElementById('text-animation').textContent.length + 1);
    }
  }
}


document.getElementsByClassName('skill-header')[0].addEventListener("click", function() {
  fadeInSkills(0);
});

document.getElementsByClassName('skill-header')[1].addEventListener("click", function() {
  fadeInSkills(1);
});

document.getElementsByClassName('skill-header')[2].addEventListener("click", function() {
  fadeInSkills(2);
});

document.getElementsByClassName('skill-header')[3].addEventListener("click", function() {
  fadeInSkills(3);
});

document.getElementsByClassName('skill-header')[4].addEventListener("click", function() {
  fadeInSkills(4);
});

const fadeInSkills = (list) => {
  
  currentOpac = 0.0;
  let intervalIncreaseOpac = setInterval(function() {
    addOpac();
  }, 40);
  const addOpac = () => {
    for (let skill of document.getElementsByClassName('skill-list')[list].children) {
      if (skill.style.opacity < 1) {
        currentOpac += .01;
        skill.style.opacity = `${currentOpac}`;
      } else {
        clearInterval(intervalIncreaseOpac);
      }
    }
  }
};