class Points {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }

  // Creating input container

    scoreWrapperElements = () => {
      const elementsContainer = document.createElement('div');
      const nameContainer = document.createElement('div');
      const pointsContainer = document.createElement('div');

      nameContainer.innerHTML = this.name;
      pointsContainer.innerHTML = this.points;

      elementsContainer.appendChild(nameContainer);
      elementsContainer.appendChild(pointsContainer);

      elementsContainer.classList.add('points_wrapper');

      return elementsContainer;
    }
}

export default Points;