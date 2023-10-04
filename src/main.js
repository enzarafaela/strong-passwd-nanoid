import { nanoid } from 'nanoid';
import './style.css';

const passwdBtn = document.querySelector('button');
const displayPasswd = document.querySelector('h2');

passwdBtn.addEventListener('click', () => {
    const randomNanoId = nanoid();
    displayPasswd.innerHTML = randomNanoId;
});
