import React from 'react';
import { Link } from 'react-router-dom';

const NavigationComponent = () => {
  const dataObject = { id: 1, name: 'Example' };

  return (
    <div>
      <Link to={`/another-route/${dataObject.id}`}>Go to Another Route</Link>
    </div>
  );
};

export default NavigationComponent;
