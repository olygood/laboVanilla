import '/style.css'
import { Header } from './src/Header.js'
import { Footer } from './src/Footer.js'
import { Main } from './src/Main.js'

const element = document.querySelector('#app');
const components = [Header, Main,Footer];

for(const el of components)
{
    element.insertAdjacentHTML('beforeend', el);
}








// element.insertAdjacentHTML('beforeend', header);
// element.insertAdjacentHTML('beforeend', main);
// element.insertAdjacentHTML('beforeend', footer);


