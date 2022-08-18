import React from 'react';
import '../stylesheet/counter.css';

function Counter({ clicksNumber }) {
  return (
    <div className='counter'>
      {clicksNumber}
    </div>
  );
}

export default Counter;