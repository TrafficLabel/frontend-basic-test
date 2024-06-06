import React, { useState } from 'react';
import calculate from "../logic/calculate";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

const Calculator = () => {
 const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => setState(calculate(state, buttonName));

  return (
    <div className="component-app" style={{ flex: 1 }}>
      <Display value={state.next || state.total || "0"}/>
      <ButtonPanel clickHandler={handleClick}/>
    </div>
  );
};

export default Calculator;
