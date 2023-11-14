import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { animals } = this.props;

    return (
      <div>
        <h2>Animals</h2>
        {animals.map((animal, index) => (
          <div key={index}>
            <h5>{animal.name}</h5>
            <img src={animal.image} alt={animal.name} width="300px" />
            <span>{animal.species}</span>
          </div>
        ))}
      </div>
    );
  }
}
