import '/style.css'
import { Header } from './src/Header.js'
import { Main } from './src/Main.js'
import { Footer } from './src/Footer.js'

const element = document.querySelector('#app');
// const components = [Header,Main,Footer];

// for(const el of components)
// {
//     element.insertAdjacentHTML('beforeend', el);
// }








element.insertAdjacentHTML('beforeend', Header);
element.insertAdjacentHTML('beforeend', Main);
element.insertAdjacentHTML('beforeend', Footer);



