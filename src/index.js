import Flower from './assets/Flower.png';

const title = document.createElement('h3');
title.textContent = 'Weap made easy';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = Flower;
page.appendChild(img);

import "./styles.css";

