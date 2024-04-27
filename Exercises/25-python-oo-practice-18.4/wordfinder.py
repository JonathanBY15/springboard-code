"""Word Finder: finds random words from a dictionary."""

class WordFinder:
    def __init__(self, path):
        self.path = path
        self.words = self.read_file()
    
    def read_file(self):
        """Read the file and make a list of words."""
        with open(self.path) as file:
            words = [word.strip() for word in file]
        return words
    
    def random(self):
        """Return a random word from the list of words."""
        import random
        return random.choice(self.words)
    
    def __repr__(self):
        return f"{len(self.words)} words read"
    
    def __str__(self):
        return f"{len(self.words)} words read"
    


class SpecialWordFinder(WordFinder):
    def read_file(self):
        """Read the file and make a list of words."""
        with open(self.path) as file:
            words = [word.strip() for word in file if word.strip() and not word.startswith("#")]
        return words
    
