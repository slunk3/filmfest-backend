const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  films: forwardTo('db'),
  me(parent, args, ctx, info) {
    //  check if there is a current userid
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
};

module.exports = Query;
