'use strict';

import db from './../db';

export default (router) => {
  router.get('/current', async (req, res) => {
    // Just for DEMO
    const user = await db.models.users.findOne();

    res.send(user);
  });

  return router;
};
