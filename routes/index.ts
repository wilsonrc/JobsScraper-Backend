'use strict';

import usersRoute from './users';

const assignRoutes = (app, router) => {
  app.use('/users', usersRoute(router));
};

export { assignRoutes };
