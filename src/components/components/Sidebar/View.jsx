import { useHistory } from 'react-router-dom';
import React, { useMemo, useState } from 'react';

import ToggleButton from '../../../assets/icons/toggleButton.svg';
import { ReactComponent as SettingsLogo } from '../../../assets/icons/settings.svg';
import sidebarOptionsByRole from './utils/constants';
import { Menu, Layout, Dropdown } from 'antd';
import classnames from 'classnames';
import SidebarHeader from './components/SidebarHeader/View';
import './Sidebar.scss';

const { Sider } = Layout;

function Sidebar(props) {
  const { userType, actions } = props;
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  const items = useMemo(
    () =>
      sidebarOptionsByRole?.map((item) =>
        !item.acceptedTypes.includes(userType)
          ? null
          : {
              key: item.key,
              label: item.label,
              icon: item.icon,
              onClick: () => history.push(item.path),
            }
      ),
    [userType]
  );

  const handleClick = ({ key }) => {
    console.log(key);
    //you can perform setState here
    if (key === 'Logout') {
      actions.logout();
    }
  };

  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key="Logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="sidebar-container">
      <Sider
        trigger={null}
        className={classnames(
          'sidebar',
          collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'
        )}
        collapsible
        collapsed={collapsed}
      >
        <SidebarHeader
          collapsed={collapsed}
          userName="Sierra Ferguson"
          designation="Front-Desk"
        />
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={['Dashboard']}
          items={items}
        />
        <div
          className={classnames(
            'settings-container',
            collapsed
              ? 'collapse-settings-container'
              : 'expand-settings-container'
          )}
        >
          <Dropdown overlay={menu} trigger={['click']}>
            <a
              onClick={(e) => e.preventDefault()}
              style={{ color: '#d46b08', fontWeight: 'bold' }}
            >
              <SettingsLogo />
            </a>
          </Dropdown>
          {collapsed ? (
            ''
          ) : (
            <p style={{ marginLeft: '12px', marginBottom: 0 }} className="link">
              Admin
            </p>
          )}
        </div>

        <div
          className={classnames(
            'toggle-container',
            collapsed ? 'collapse-toggle-container' : 'expand-toggle-container'
          )}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <img style={{ height: '20px' }} src={ToggleButton} alt="toggle" />
          <div
            className={classnames(
              'toggle-text',
              collapsed ? 'collapse-toggle-text' : 'expand-toggle-text'
            )}
            toggle={collapsed}
          >
            Toggle sidebar
          </div>
        </div>
      </Sider>
    </div>
  );
}

export default Sidebar;
