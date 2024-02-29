import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div className="card">
      <h2>Información ingresada:</h2>
      <p><strong>Nombre:</strong> {input1}</p>
      <p><strong>Color:</strong> {input2}</p>
    </div>
  );
};

export default Card;
