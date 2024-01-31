
import React from 'react';


const Icon = ({className, name}) => {
  return (
    <svg className={`${className}`}>
        <use xlinkHref={`/img/icons/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;