import React from 'react';
import PropTypes from 'prop-types';
import { information } from '../../../assets/config/config';
import { Icon } from '../../icons';

const Social = () => {

  const socialMedia = information.socialMedia;

  return (
  
    <div className="side side--left">
      <ul className="social-list">
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i} className="social-list__list-item">
              <a className="social-list__list-item-link" href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;