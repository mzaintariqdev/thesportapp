import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import TableComp from '../components/TableComp';
import { clientUrls } from '../../routes/Routes';
import { Spin } from 'antd';
import { clientColumns } from '../../utils/constants/columns';

const Clients = (props) => {
  const { isLoading, clients, actions } = props;

  useEffect(() => {
    actions.getClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();

  const composeUrl = (id) => `${clientUrls.clientProfile}/${id}`;

  const openStartupDetails = (record) => history.push(composeUrl(record.id));
  return (
    <Spin spinning={isLoading}>
      <TableComp
        onRow={(record) => ({ onClick: () => openStartupDetails(record) })}
        columns={clientColumns}
        dataSource={clients}
        pagination={false}
        rowKey={(record) => record.id}
      />
    </Spin>
  );
};

export default Clients;
