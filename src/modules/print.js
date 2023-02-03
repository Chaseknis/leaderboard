import { uploadPoints } from './api.js';
import refreshPoints from './leaderboard.js';

const refreshButton = document.querySelector('.refresh_button');
const formName = document.querySelector('.form_name');
const formScore = document.querySelector('.form_points');
const formSubmit = document.querySelector('.form_submit');

formSubmit.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = formName.value;
  const score = formScore.value;
  if (name !== null && score !== null) {
    await uploadPoints(name, score);
    refreshPoints();
  }
});

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  refreshPoints();
});
