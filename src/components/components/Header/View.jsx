import { Input } from 'antd';
import React from 'react';

import { ReactComponent as Notification } from '../../../assets/icons/notificationBell.svg';
import { ReactComponent as HelpIcon } from '../../../assets/icons/question-circle.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

import './Header.scss';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper__left">
        <SearchIcon
          style={{ width: '30px', marginRight: '10px', cursor: 'pointer' }}
        />
        <Input className="search-bar" placeholder="Search" />
      </div>

      <div className="header-wrapper__right">
        <HelpIcon style={{ cursor: 'pointer' }} />
        <Notification style={{ marginLeft: '11px', cursor: 'pointer' }} />
      </div>
    </div>
  );
}

export default Header;
