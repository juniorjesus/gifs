import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useCounter from "./useCounter";

const Contador = () => {
  const { counter, handleSumar, handleReset, handleRestar } = useCounter(4);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <Button variant="primary" onClick={handleSumar}>
        sumar
      </Button>
      <Button variant="primary" onClick={handleReset}>
        reset
      </Button>
      <Button variant="primary" onClick={handleRestar}>
        restar
      </Button>
    </div>
  );
};

export default Contador;
