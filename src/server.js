const Hapi = require('@hapi/hapi');
const routes = require('./route');

const init = async () => {
  const server = Hapi.Server({
    port: 8000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server sedang berjalan pada ${server.info.uri}`);
};

init();
