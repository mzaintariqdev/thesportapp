import mockAuthUsers from '../utils/mocks/mockAuthUsers';
import { sleep } from './utils/helpers';

export const loginApiService = async (data) => {
  const { username, password } = data;
  await sleep(3000);

  const user = mockAuthUsers.find(
    (u) => u.userName === username && u.password === password
  );
  if (user) {
    return { data: user };
  }
  return { error: 'Wrong username or password.' };
};
