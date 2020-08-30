const textAnimElem = document.getElementById('text-animation');

let terminalText = [
  'BI_Developer', 'UI_Designer',
  'SQL_Developer', 'Server_Admin',
  'Linux_Enthusiast', 'Python_Developer',
  'Go_Developer', 'Bash_Scripter',
  'JS_Developer'
];
let currentText = 0;

const textAnimation = () => {

  let intervalTypeText = setInterval(function () {
    typeText(terminalText[currentText])
  }, 200);

  const typeText = (text) => {
    if (document.getElementById('text-animation').textContent == text) {
      if (currentText == terminalText.length - 1) {
        currentText = 0;
      } else {
        currentText++;
      }
      clearInterval(intervalTypeText);
      setTimeout(function () {
        document.getElementById('text-animation').textContent = "";
        textAnimation()
      }, 1000);
    } else {
      document.getElementById('text-animation').textContent = text.substring(0, document.getElementById('text-animation').textContent.length + 1);
    }
  }
}

document.getElementById('container-skills').onmouseover = function () {
  timeoutFadeInSkills()
};

const timeoutFadeInSkills = () => {
  fadeInSkills(0);
  setTimeout(function () {
    fadeInSkills(1);
  }, 400);
  setTimeout(function () {
    fadeInSkills(2);
  }, 800);
  setTimeout(function () {
    fadeInSkills(3);
  }, 1200);
  setTimeout(function () {
    fadeInSkills(4);
  }, 1600);
  setTimeout(function () {
    fadeInSkills(5);
  }, 2000);
  setTimeout(function () {
    fadeInSkills(6);
  }, 2400);
  document.getElementById('container-skills').onmouseover = "";
};

const fadeInSkills = (list) => {
  currentOpac = 0.0;
  let intervalIncreaseOpac = setInterval(function () {
    addOpac();
  }, 10);
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
