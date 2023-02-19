import React from 'react';
import classnames from 'classnames';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import './SidebarHeader.scss';

function SidebarHeader(props) {
  const { collapsed, userName, designation } = props;

  return (
    <div className="sidebar-header-comp">
      <p
        className={classnames(
          'sidebar-header',
          collapsed ? 'header-collapsed' : 'header-expanded'
        )}
      >
        {collapsed ? 'TSA' : 'TheSportsApp'}
      </p>
      <div
        className={classnames(
          'sidebar-user__details',
          collapsed ? 'sidebar-user__details-collapsed' : 'header-expanded'
        )}
      >
        <Avatar
          className={classnames(
            'user_avatar',
            collapsed ? 'sidebar-user__details-collapsed' : 'header-expanded'
          )}
          size={46}
          icon={<UserOutlined />}
        />
        <div
          className={classnames(
            'user_container',
            collapsed ? 'user_container-hide' : 'user_container-display'
          )}
          collapsed={collapsed}
        >
          <p className="user-name">{userName}</p>
          <p className="user-designation">{designation}</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader;
