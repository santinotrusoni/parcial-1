import React, { useState } from 'react';
import Card from "./Card";

const Form = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [isValidated, setIsValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (input1.length < 3 || /^\s/.test(input1) || input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setIsValidated(false);
    } else {
      setError('');
      setIsValidated(true);
    }
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Nombre"
          />
        </div>
        <div>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Color"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {isValidated && <Card input1={input1} input2={input2} />}
    </div>
  );
};

export default Form;