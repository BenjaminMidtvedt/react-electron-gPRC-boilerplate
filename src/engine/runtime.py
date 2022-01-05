import random


class Runtime:
    """
    Stateful class that handles runtime request from the client.
    Should be agnostic of grpc.
    """

    def __init__(self):
        self.greetings = {"en": ["Hi!", "Hello!"], "sv": ["Hej!"]}

    def get_greeting(self, language):
        assert language in self.greetings, f"Language not recognized: {language}"
        return random.choice(self.greetings[language])
