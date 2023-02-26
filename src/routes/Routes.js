const homeUrl = '/';
const loginUrl = '/login';

export const clientUrls = {
  clients: '/clients',
  clientProfile: '/client-profile',
};

const scheduleUrl = '/schedule';

export const routes = {
  homeUrl,
  loginUrl,
  clients: clientUrls.clients,
  clientProfile: `${clientUrls.clientProfile}/:id`,
  scheduleUrl,
};
