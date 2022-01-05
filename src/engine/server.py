"""The Python implementation of the gRPC route guide server."""

from concurrent import futures
import logging
import grpc
import routes_pb2
import routes_pb2_grpc
import runtime

# logging.basicConfig(filename="engine.log", level=logging.DEBUG)
# logging.debug("This message should go to the log file")


def get_dimensions(arr):
    return dict(width=arr.shape[1], height=arr.shape[0])


class RoutesServicer(routes_pb2_grpc.RoutesServicer):
    """
    Wrapper of runtime defined in package.

    Should define all methods defined in .proto file
    """

    def __init__(self):
        self.runtime = runtime.Runtime()

    def GetGreeting(self, request: routes_pb2.Language, context) -> routes_pb2.Greeting:
        random_greeting = self.runtime.get_greeting(request.language)
        return routes_pb2.Greeting(greeting=random_greeting)


def serve():
    print("Starting server!")
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    print("Adding routes!")
    routes_pb2_grpc.add_RoutesServicer_to_server(RoutesServicer(), server)
    print("Adding ports!")
    server.add_insecure_port("[::]:50051")
    server.start()
    print("Started!")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
