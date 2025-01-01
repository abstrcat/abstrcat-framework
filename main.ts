import Logo from '/logo/abstrcat-black.svg';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#abstrcat')!.innerHTML = `
  <div class="flex flex-col items-center justify-center h-screen">
    <a href="https://vite.dev" target="_blank">
      <img src="${Logo}" class="logo" alt="Vite logo" />
    </a>

    <h1>Abstrcat + TypeScript</h1>
  </div>
`;
