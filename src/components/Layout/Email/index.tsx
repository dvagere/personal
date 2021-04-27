import React from 'react';
import { information } from '../../../assets/config/config';

const Email = () => {

  const email = information.email;

  return (
  
    <div className="side side--right">
      <div className="styled-link-wrapper ">
        <a className="styled-link-wrapper__link" href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

export default Email;