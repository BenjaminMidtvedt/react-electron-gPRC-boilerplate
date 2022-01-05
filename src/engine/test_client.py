import routes_pb2
import routes_pb2_grpc
import unittest
import grpc


class EngineClientTests(unittest.TestCase):
    def testGreeting(self):
        with grpc.insecure_channel("localhost:50051") as channel:
            stub = routes_pb2_grpc.RoutesStub(channel)

            response = stub.GetGreeting(routes_pb2.Language(language="en"))
            self.assertIn(response.greeting, ["Hello!", "Hi!"])

            response = stub.GetGreeting(routes_pb2.Language(language="sv"))
            self.assertIn(response.greeting, ["Hej!"])


if __name__ == "__main__":
    unittest.main()
