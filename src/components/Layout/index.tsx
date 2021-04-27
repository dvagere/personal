import React from 'react';
import Email from './Email';
import Social from './Social';

interface Props {

}

const Layout:React.FC<Props> = ({ children }) => {

  return (
    <div className="styled-content">
      <Social />
      <Email />
      <div>
        { children }
      </div>
    </div>
  );
};

export default Layout;