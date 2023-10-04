import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

import './style.css';

const passwdBtn = document.querySelector('button');
const displayPasswd = document.querySelector('h2');

passwdBtn.addEventListener('click', () => {
    const randomNanoId = nanoid();
    displayPasswd.innerHTML = randomNanoId;
});


displayPasswd.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Password copied!');
});
  