import React from 'react';

import { ReactComponent as CategoryLogo } from '../../../../assets/icons/category.svg';
import { ReactComponent as ScheduleLogo } from '../../../../assets/icons/schedule.svg';
import { ReactComponent as ClientLogo } from '../../../../assets/icons/client.svg';
import { ReactComponent as GroupLogo } from '../../../../assets/icons/group.svg';
import { ReactComponent as ReportLogo } from '../../../../assets/icons/report.svg';
import IconWrapper from '../IconWrapper';
import { routes } from '../../../../routes/Routes';
import ROLES from '../../../../utils/constants/roles';

const sidebarOptionsByRole = [
  {
    key: 'Dashboard',
    icon: (
      <IconWrapper>
        <CategoryLogo />
      </IconWrapper>
    ),
    label: 'Dashboard',
    path: routes.homeUrl,
    acceptedTypes: [ROLES.admin, ROLES.club],
  },
  {
    key: 'Schedule',
    icon: (
      <IconWrapper>
        <ScheduleLogo />
      </IconWrapper>
    ),
    label: 'Schedule',
    path: routes.scheduleUrl,
    acceptedTypes: [ROLES.admin, ROLES.club],
  },
  {
    key: 'Clients',
    icon: (
      <IconWrapper>
        <ClientLogo />
      </IconWrapper>
    ),
    label: 'Clients',
    path: routes.clients,
    acceptedTypes: [ROLES.admin, ROLES.club],
  },
  {
    key: 'Groups',
    icon: (
      <IconWrapper>
        <GroupLogo />
      </IconWrapper>
    ),
    label: 'Groups',
    path: '/',
    acceptedTypes: [ROLES.admin, ROLES.club],
  },
  {
    key: 'Reports',
    icon: (
      <IconWrapper>
        <ReportLogo />
      </IconWrapper>
    ),
    label: 'Reports',
    path: '/',
    acceptedTypes: [ROLES.admin, ROLES.club],
  },
];

export default sidebarOptionsByRole;
