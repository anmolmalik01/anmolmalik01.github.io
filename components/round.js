import React from 'react';

const RotatingText = () => {
  return (
    <div className="main">
      <svg id="rotatingText" viewBox="0 0 300 300" width="200" height="200">
        <defs>
          <path id="circle" d="M 150, 150
            m -120, 0
            a 120, 120 0 1, 0 240, 0
            a 120, 120 0 1, 0 -240, 0
          "></path>
        </defs>
        <text>
          <textPath xlinkHref="#circle" startOffset="0%" className="text">
            Designer ~ Data Scientist ~ Developer ~
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default RotatingText;
