import './style.css';
import GetPoints from './modules/getPoints.js';

const refreshButton = document.querySelector('.refresh_button');
const formName = document.querySelector('.form_name');
const formPoints = document.querySelector('.form_points');
const formSubmit = document.querySelector('.form_submit');
const scoreWrapper = document.querySelector('.score_wrapper');

const getpoint = new GetPoints(scoreWrapper);

refreshButton.addEventListener('click', () => getpoint.refreshPoints());

formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  getpoint.addPointsToList(formName.value, formPoints.value);
  formName.value = '';
  formPoints.value = '';
});
