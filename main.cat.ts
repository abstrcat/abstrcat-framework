import './assets/css/main.css';
import { createApp } from './abstrcat-lib';
import { appHtml } from './pages/index.cat';
const framework = createApp();

document.querySelector<HTMLDivElement>('#abstrcat')!.innerHTML = appHtml;
