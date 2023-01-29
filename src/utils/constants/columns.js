import { UserOutlined } from '@ant-design/icons';

import AntAvatar from '../../components/components/ant/Avatar';
import '../../components/Clients/Clients.scss';

export const clientColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, { name }) => (
      <div className="client-profile">
        <AntAvatar size={24} icon={<UserOutlined />} />
        <p className="client-profile__name">{name}</p>
      </div>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (_, { email }) => <p className="client-email">{email}</p>,
  },
  {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName',
  },
  {
    title: 'Mobile',
    key: 'mobile',
    dataIndex: 'mobile',
  },
  {
    title: 'Amount Due',
    key: 'amountDue',
    dataIndex: 'amountDue',
  },
  {
    title: 'Last Session',
    key: 'lastSession',
    dataIndex: 'lastSession',
  },
];
