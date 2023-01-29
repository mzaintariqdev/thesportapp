import { mockClients } from '../utils/mocks/mockClients';
import { sleep } from './utils/helpers';

export const getClientsService = async () => {
  await sleep(2000);
  return {
    data: mockClients,
    error: false,
    status: 200,
  };
};
