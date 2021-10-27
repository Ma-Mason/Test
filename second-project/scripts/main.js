let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src'); //获取图片地址source
    if(mySrc === 'images/xr-1.png') {
      myImage.setAttribute('src', 'images/xr-2.png');
    } else {
      myImage.setAttribute('src', 'images/xr-1.png');
    }
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

myButton.onclick = function() {
  setUserName();
}

