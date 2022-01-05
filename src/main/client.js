const grpc = require('@grpc/grpc-js');
const { loadSync } = require('@grpc/proto-loader');

const PROTO_PATH = './protos/routes.proto';

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const grpcPkg = grpc.loadPackageDefinition(packageDefinition);

const client = new grpcPkg.router.Routes(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

module.exports = client;
