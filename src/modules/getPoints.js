import Points from './points.js';

class GetPoints {
  constructor(pointsList) {
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.ID = 'Zl4d7IVkemOTTVg2fUdz';
    this.games = 'games';
    this.scoresInURL = 'scores';
    this.pointsList = pointsList;
    this.points = [];
  }

  // baseURL/games/:id/scores/

    getAllPoints = () => fetch(`${this.baseURL}/${this.games}/${this.ID}/${this.scoresInURL}/`).then((response) => console.log(response.json()));


    newPoints = (name, point) => {
      if (!name || !point) {
        return {};
      }

      return fetch(`${this.baseURL}/${this.games}/${this.ID}/${this.scoresInURL}/`, {
        method: 'POST',
        body: JSON.stringify({ user: name, point }),
        headers: { 'content-type': 'application/json, charset=UTF-8,'},
      }).then((response) => response.json());
    }

    pointsArray = (listOfPoints) => {
      this.points = [];
      listOfPoints.forEach((point) => {
        const newPoints = new Points(point.user, point.point);
        this.points.push(newPoints);
      });
    }

    pointsListDom = () => {
      this.pointsList.innerHTML = '';

      this.points.forEach((point) => {
        const pointDom = point.draw();
        this.pointsList.appendChild(pointDom);
      });
    }

    refreshPoints = async () => {
      const listOfPoints = await this.getAllPoints();
      this.pointsArray(listOfPoints.result);
      this.pointsListDom();
    }

    addPointsToList = async (name, point) => {
      const response = await this.newPoints(name, point);

      if (!response) {
        return;
      }
      if (response.result === 'Points created successfully') {
        this.refreshPoints();
      }
    }
}

export default GetPoints;