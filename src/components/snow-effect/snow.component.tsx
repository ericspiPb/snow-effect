import React from 'react';

import './snow.scss';

export default function SnowEffect() {
  return (
    <div className="snow-wrapper">
      <div className="snow layer1"></div> 
      <div className="snow layer1 delay"></div>
      <div className="snow layer2"></div>
      <div className="snow layer2 delay"></div>
      <div className="snow layer3"></div>
      <div className="snow layer3 delay"></div>
    </div>
  )
}
