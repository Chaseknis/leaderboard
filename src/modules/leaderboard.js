import { getPoints } from './api.js';

const scoresWrapper = document.querySelector('.score_wrapper');
const inputName = document.querySelector('.form_name');
const inputScore = document.querySelector('.form_points');

const refreshPoints = async () => {
  const scores = await getPoints();

  scoresWrapper.innerHTML = '';

  scores.result.forEach((score) => {
    const pointsWrapper = document.createElement('div');
    pointsWrapper.classList.add('points_wrapper');
    pointsWrapper.innerHTML = `${score.user}: ${score.score}`;
    scoresWrapper.appendChild(pointsWrapper);
  });

  inputName.value = '';
  inputScore.value = '';
};

export default refreshPoints;