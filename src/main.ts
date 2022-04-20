import { main, cssTsPath } from './main.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <main class="${main}">
    <h1>🧁</h1>
    <p>${cssTsPath}</p>
  </main>
`;
