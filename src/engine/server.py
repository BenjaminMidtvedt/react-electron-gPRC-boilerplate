"""The Python implementation of the gRPC route guide server."""

from concurrent import futures
import logging
import grpc
import routes_pb2
import routes_pb2_grpc

logging.basicConfig(filename="engine.log", level=logging.DEBUG)
logging.debug("This message should go to the log file")


def get_dimensions(arr):
    return dict(width=arr.shape[1], height=arr.shape[0])


class RoutesServicer(routes_pb2_grpc.RoutesServicer):
    """
    Wrapper of runtime defined in package.

    Should define all methods defined in .proto file
    """


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    routes_pb2_grpc.add_RoutesServicer_to_server(RoutesServicer(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
